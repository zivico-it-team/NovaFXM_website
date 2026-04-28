function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 px-4">
      <section className="w-full max-w-sm rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl shadow-slate-300/40 backdrop-blur">
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          React + Vite
        </span>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900">
          Hello there
        </h1>

        <p className="mt-3 text-base leading-7 text-slate-600">
          This is a simple Tailwind card with better spacing, cleaner
          typography, and a polished button style.
        </p>

        <button
          className="mt-6 w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          type="button"
        >
          Click Me
        </button>
      </section>
    </main>
  )
}

export default App
