"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

interface ContactSectionProps {
  showBangladeshAddress?: boolean;
}

export const ContactSection = ({ showBangladeshAddress }: ContactSectionProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "AI Agent Consultation",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:admin@digitxgroup.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-yellow-400 mb-2 tracking-wider">
              Get Started
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Business?</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Connect with our AI experts to discuss how DigitX AI Agent OS can revolutionize your business operations. Let&apos;s build the future of automation together.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-1">
                <Building2 />
                <div className="font-bold">US Headquarters</div>
              </div>

              <div>44-70 21st St, Long Island City, NY 11101</div>
            </div>

            {showBangladeshAddress && (
              <div>
                <div className="flex gap-2 mb-1">
                  <Building2 />
                  <div className="font-bold">Bangladesh Office</div>
                </div>

                <div>Dhaka, Bangladesh</div>
                <div>+880 1988121220</div>
              </div>
            )}

            <div>
              <div className="flex gap-2 mb-1">
                <Mail />
                <div className="font-bold">Contact Us</div>
              </div>

              <div>admin@digitxgroup.com</div>
            </div>

            <div>
              <div className="flex gap-2">
                <Clock />
                <div className="font-bold">Business Hours</div>
              </div>

              <div>
                <div>Monday - Friday: 9AM - 6PM EST</div>
                <div>24/7 Enterprise Support Available</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader className="text-yellow-400 text-2xl font-bold">Schedule Your AI Consultation</CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-muted-foreground">First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} className="bg-white/5 border-white/10 focus:border-yellow-400/50 transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-muted-foreground">Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} className="bg-white/5 border-white/10 focus:border-yellow-400/50 transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                            className="bg-white/5 border-white/10 focus:border-yellow-400/50 transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Subject</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 focus:border-yellow-400/50 transition-colors">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl">
                            <SelectItem value="AI Agent Consultation">
                              AI Agent Consultation
                            </SelectItem>
                            <SelectItem value="Enterprise Implementation">
                              Enterprise Implementation
                            </SelectItem>
                            <SelectItem value="Custom Agent Development">
                              Custom Agent Development
                            </SelectItem>
                            <SelectItem value="Workflow Automation">
                              Workflow Automation
                            </SelectItem>
                            <SelectItem value="Technical Support">
                              Technical Support
                            </SelectItem>
                            <SelectItem value="Partnership Inquiry">
                              Partnership Inquiry
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="How can we help you?"
                            className="resize-none bg-white/5 border-white/10 focus:border-yellow-400/50 transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold transition-all shadow-lg hover:shadow-yellow-500/20">Send Message</Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};