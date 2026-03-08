export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-64 lg:h-96">
      <h1 className="text-5xl font-bold divide-x divide-stone-700 gap-x-4">
        <span className="px-4 text-yellow-500">404</span>
        <span className="px-4 text-stone-300">Not Found</span>
      </h1>
    </div>
  )
}