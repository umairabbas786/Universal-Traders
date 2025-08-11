import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OfficeMapCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Visit Our Office</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
          <p className="text-gray-500">
            Interactive Map - Islamabad Office Location
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900">Head Office</h4>
            <p className="text-gray-600">Opposite G.T Road, Islamabad</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Branch Office</h4>
            <p className="text-gray-600">Office 2, Rawalpindi/Tarnol</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
