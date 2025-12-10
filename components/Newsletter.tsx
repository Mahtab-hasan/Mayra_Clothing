export function Newsletter() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl mx-auto text-center animate-slideInUp">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8">
          Subscribe for new arrivals, exclusive offers, and fashion tips
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}