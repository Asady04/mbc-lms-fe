export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block w-screen py-5 px-10 text-center justify-center">
        {children}
      </div>
    </section>
  );
}
