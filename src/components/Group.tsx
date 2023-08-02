export default function Group({ children }: { children: React.ReactNode }) {
  return <div className="grid md:grid-cols-2 gap-3 mb-8">{children}</div>;
}
