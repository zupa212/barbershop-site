
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone } from "lucide-react";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Απαιτείται όνομα"
  }),
  email: z.string().email({
    message: "Απαιτείται έγκυρο email"
  }),
  location: z.string().min(2, {
    message: "Απαιτείται τοποθεσία"
  }),
  phone: z.string().min(10, {
    message: "Απαιτείται έγκυρος αριθμός τηλεφώνου"
  }),
  message: z.string().min(10, {
    message: "Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες"
  })
});

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      phone: "",
      message: ""
    }
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      from_phone: data.phone,
      location: data.location,
      message: data.message
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast({
          title: "Η αίτηση υποβλήθηκε επιτυχώς",
          description: "Θα επικοινωνήσουμε σύντομα σχετικά με το ερώτημά σας για το franchise."
        });
        form.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast({
          title: "Σφάλμα",
          description: "Υπήρξε ένα πρόβλημα κατά την αποστολή της φόρμας. Παρακαλώ προσπαθήστε ξανά.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return <section id="franchise-contact-form" className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="absolute inset-0 bg-[url('/uploads/c0298917-75e1-473e-a785-255bee752a30.png')] opacity-5 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5">Ξεκινήστε</Badge>
              <h2 className="text-4xl font-bold mb-8">Ετοιμοι να <span className="text-primary">Συζητήσουμε</span></h2>
              <p className="text-gray-300 mb-8">
                Είμαστε έτοιμοι να απαντήσουμε σε όλες τις ερωτήσεις σας και να σας παρέχουμε επιπλέον λεπτομέρειες για τις ευκαιρίες franchise του King's Barber. Επικοινωνήστε με την ομάδα franchise μας σήμερα.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Διεύθυνση</h3>
                    <p className="text-gray-300">Πανόραμα, Θεσσαλονίκη, Ελλάδα</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Τηλέφωνο</h3>
                    <p className="text-gray-300">+30 698 9673 173</p>
                  </div>
                </div>
                
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="bg-gray-900 border border-gray-800 p-10">
                <h3 className="text-2xl font-bold mb-8">Φόρμα Επικοινωνίας Franchise</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="name" render={({
                      field
                    }) => <FormItem>
                            <FormLabel className="text-white">Ονοματεπώνυμο</FormLabel>
                            <FormControl>
                              <Input className="bg-gray-800 border-gray-700 focus:border-primary text-white" placeholder="Το πλήρες όνομά σας" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      
                      <FormField control={form.control} name="email" render={({
                      field
                    }) => <FormItem>
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <Input className="bg-gray-800 border-gray-700 focus:border-primary text-white" placeholder="Το email σας" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="phone" render={({
                      field
                    }) => <FormItem>
                            <FormLabel className="text-white">Τηλέφωνο</FormLabel>
                            <FormControl>
                              <Input className="bg-gray-800 border-gray-700 focus:border-primary text-white" placeholder="Το τηλέφωνό σας" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      
                      <FormField control={form.control} name="location" render={({
                      field
                    }) => <FormItem>
                            <FormLabel className="text-white">Προτιμώμενη Τοποθεσία</FormLabel>
                            <FormControl>
                              <Input className="bg-gray-800 border-gray-700 focus:border-primary text-white" placeholder="Πόλη ή περιοχή ενδιαφέροντος" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                    </div>
                    
                    <FormField control={form.control} name="message" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-white">Το Μήνυμά σας</FormLabel>
                          <FormControl>
                            <Textarea className="bg-gray-800 border-gray-700 focus:border-primary text-white min-h-[120px]" placeholder="Πείτε μας για εσάς και τυχόν συγκεκριμένες ερωτήσεις για το franchise" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-black py-6 text-lg rounded-none"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Αποστολή...' : 'Υποβολή Αίτησης Franchise'}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactForm;
