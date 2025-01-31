export default function AssignmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-start justify-center gap-4 p-8 lg:px-44 2xl:px-80">
      <div className="inline-block w-11/12 text-center justify-center">
        {children}
      </div>
    </section>
  );
}
