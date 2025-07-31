import Sidebar from "@/components/sidebar/sidebar";

export default function CafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Sidebar />
      <div className="p-4 sm:ml-64">{children}</div>
    </section>
  );
}
