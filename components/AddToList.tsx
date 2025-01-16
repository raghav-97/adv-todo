import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function AddToList() {
  return (
    <Card>
      <CardContent className="flex items-center pt-6">
        <Plus />
        Add to List
      </CardContent>
    </Card>
  );
}
   