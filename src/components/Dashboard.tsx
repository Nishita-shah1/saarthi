
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  AlertTriangle, 
  Users, 
  FileText, 
  BarChart 
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-soft">
      <h2 className="text-2xl font-bold mb-6">प्रशासक डैशबोर्ड</h2>
      
      <Tabs defaultValue="usage">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="usage" className="text-lg py-3">
            <BarChart3 className="mr-2 h-5 w-5" />
            <span>उपयोग</span>
          </TabsTrigger>
          <TabsTrigger value="alerts" className="text-lg py-3">
            <AlertTriangle className="mr-2 h-5 w-5" />
            <span>अलर्ट</span>
          </TabsTrigger>
          <TabsTrigger value="sentiment" className="text-lg py-3">
            <Users className="mr-2 h-5 w-5" />
            <span>भावना</span>
          </TabsTrigger>
          <TabsTrigger value="schemes" className="text-lg py-3">
            <FileText className="mr-2 h-5 w-5" />
            <span>योजनाएँ</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="usage" className="py-4">
          <div className="flex justify-center items-center h-64 border border-gray-200 rounded-lg">
            <div className="text-center">
              <BarChart className="mx-auto h-12 w-12 text-saarthiBlue-400 mb-4" />
              <p className="text-xl text-gray-600">जल्द ही आने वाला उपयोग चार्ट</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="alerts" className="space-y-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium">चिंतित उपयोगकर्ता - गिरिजा देवी</h3>
              <p className="text-gray-600">+91 98765-XXXXX पर संपर्क करें</p>
              <p className="text-sm text-gray-500 mt-1">15 मिनट पहले</p>
            </div>
          </div>
          
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start">
            <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium">पेंशन प्राप्त नहीं हुई - रामू यादव</h3>
              <p className="text-gray-600">+91 87654-XXXXX पर संपर्क करें</p>
              <p className="text-sm text-gray-500 mt-1">2 घंटे पहले</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="sentiment">
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">भावना विश्लेषण रिपोर्ट</p>
            <p className="text-gray-500 mt-2">अभी कोई डेटा उपलब्ध नहीं है</p>
          </div>
        </TabsContent>
        
        <TabsContent value="schemes">
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">योजना पहुंच लॉग</p>
            <p className="text-gray-500 mt-2">अभी कोई डेटा उपलब्ध नहीं है</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
