
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ContractTemplate } from '@/types/contract';

type TemplateCardProps = {
  template: ContractTemplate;
};

const TemplateCard = ({ template }: TemplateCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{template.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
          <img 
            src={template.imageUrl} 
            alt={template.title} 
            className="h-16 w-16 opacity-70"
          />
        </div>
        <p className="text-sm text-gray-500 mb-2">{template.description}</p>
        <div className="text-xs inline-block px-2.5 py-1 bg-gray-100 rounded-full">
          {template.category}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-contractly-blue hover:bg-contractly-blue/90" 
          onClick={() => navigate(`/create-contract?templateId=${template.id}`)}
        >
          Use Template
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;
