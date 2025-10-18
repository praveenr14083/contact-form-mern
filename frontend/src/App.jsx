import QueryProvider from "@/providers/QueryProvider";
import ContactPage from "@/pages/ContactPage";

export default function App() {
  return (
    <QueryProvider>
      <ContactPage />
    </QueryProvider>
  );
}
