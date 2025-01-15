import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Info } from "lucide-react";
import { ChartComponent } from "./ChartComponent";

export default function ChartBox() {
  return (
    <Card>
      <CardHeader className="flex justify-center">
        <CardTitle>Today Task</CardTitle>
        <Info />
      </CardHeader>
      <CardContent>
        <ChartComponent></ChartComponent>
      </CardContent>
    </Card>
  );
}
