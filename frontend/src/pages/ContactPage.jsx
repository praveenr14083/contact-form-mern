import ContactForm from "@/components/forms/ContactForm";
import SplitLayout from "@/components/layout/SplitLayout";

export default function ContactPage() {
  const imageUrl =
    "https://images.unsplash.com/photo-1499159058454-75067059248a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871";
  return (
    <SplitLayout imageSrc={imageUrl}>
      <ContactForm />
    </SplitLayout>
  );
}
