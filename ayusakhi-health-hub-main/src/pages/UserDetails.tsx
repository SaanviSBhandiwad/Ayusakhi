import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, db } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    gender: "",
    bloodGroup: "",
    emergencyContact: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = auth.currentUser;
      if (!user) return;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        ...form,
        createdAt: new Date(),
      });

      toast({ title: "Signup Complete" });
      navigate("/dashboard");
    } catch (err: unknown) {
      toast({ title: "Error", description: err instanceof Error ? err.message : "An unknown error occurred", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Complete Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Label>Full Name</Label>
            <Input onChange={e => setForm({ ...form, name: e.target.value })} required />
            <Label>Gender</Label>
            <Input onChange={e => setForm({ ...form, gender: e.target.value })} required />
            <Label>Blood Group</Label>
            <Input onChange={e => setForm({ ...form, bloodGroup: e.target.value })} required />
            <Label>Emergency Contact</Label>
            <Input onChange={e => setForm({ ...form, emergencyContact: e.target.value })} required />
            <Button className="w-full" disabled={loading}>
              {loading ? "Saving..." : "Save & Continue"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetails;

