export default function NotFound() {
  return (
    <>
      <div className="min-h-screen w-full theme-bg theme-text relative">
        {/* Diagonal Grid with Light */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
          repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
        `,
            backgroundSize: "40px 40px",
          }}
        />
        <main className="grid min-h-full py-40 place-items-center px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold theme-text">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight theme-text sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 theme-text">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </a>
              <a href="#" className="text-sm font-semibold theme-text">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
