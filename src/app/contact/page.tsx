"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("@/components/ContactMap"), {
  ssr: false,
});

export default function ContactPage() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contactform/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      alert("Message sent successfully!");
      e.currentTarget.reset();
    } else {
      alert(result.message || "Failed to send message");
    }
  } catch (error) {
    alert("Something went wrong.");
  }
};
    return (
        <div className="pt-32 pb-24">
            {/* Contact Hero */}
            <section className="container mx-auto px-4 mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                >
                    Contact Us
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight max-w-5xl mx-auto">
                    Let&apos;s Start a <span className="text-primary">Conversation</span>.
                </h1>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                    Have questions about ADRO? Want to see a demo? We&apos;re here to help you unlock the power of your data.
                </p>
            </section>

          
<section className="container mx-auto px-16 py-6">
  <div className="grid lg:grid-cols-2 gap-8 items-start">

    {/* LEFT SIDE */}
    <div className="space-y-12">

      <h2 className="text-4xl font-bold tracking-tight">
        Get in Touch
      </h2>

      <div className="space-y-8">

        {/* Email */}
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center">
            <Mail className="text-primary" size={26} />
          </div>

          <div>
            <h4 className="text-lg font-semibold">Email Us</h4>

            <a
              href="mailto:support@equilibrateai.com"
              className="text-muted-foreground hover:underline"
            >
              support@equilibrateai.com
            </a>
          </div>
        </div>


        {/* Phone */}
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center">
            <Phone className="text-primary" size={26} />
          </div>

          <div>
            <h4 className="text-lg font-semibold">Call Us</h4>

            <a
              href="tel:+919606024155"
              className="text-muted-foreground hover:underline"
            >
              +91-9606024155
            </a>
          </div>
        </div>


        {/* Address */}
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center">
            <MapPin className="text-primary" size={26} />
          </div>

          <div>
            <h4 className="text-lg font-semibold">Visit Us</h4>

            <p className="text-muted-foreground">
              Bangalore, Karnataka, India
            </p>
          </div>
        </div>

      </div>


      {/* Map Section */}
      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-4">
          Our Location
        </h3>

      <div className="relative z-0 w-full h-[320px] rounded-3xl overflow-hidden border border-border shadow-md">
  <ContactMap />
</div>
      </div>

    </div>


    {/* RIGHT SIDE (FORM) */}
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-10 rounded-[2.5rem] border border-border shadow-xl"
      >

        <form className="space-y-6" onSubmit={handleSubmit}>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="space-y-2">
              <label className="text-sm font-semibold">
                First Name
              </label>

              <input
                name="name"
                className="w-full px-5 py-4 rounded-xl border border-border focus:border-primary focus:outline-none"
                placeholder="Jane"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">
                Last Name
              </label>

              <input
                name="lastname"
                className="w-full px-5 py-4 rounded-xl border border-border focus:border-primary focus:outline-none"
                placeholder="Doe"
              />
            </div>

          </div>


          <div className="space-y-2">
            <label className="text-sm font-semibold">
              Email Address
            </label>

            <input
              name="email"
              type="email"
              className="w-full px-5 py-4 rounded-xl border border-border focus:border-primary focus:outline-none"
              placeholder="jane@example.com"
            />
          </div>


          <div className="space-y-2">
            <label className="text-sm font-semibold">
              Message
            </label>

            <textarea
              name="message"
              className="w-full px-5 py-4 rounded-xl border border-border focus:border-primary focus:outline-none min-h-[150px]"
              placeholder="Tell us how we can help..."
            />
          </div>


          <Button
            type="submit"
            size="lg"
            className="w-full h-14 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3"
          >
            <Send size={18} />
            Send Message
          </Button>

        </form>

      </motion.div>
    </div>

  </div>
</section>
        </div>
    );
}
