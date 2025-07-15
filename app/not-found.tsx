export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 - Page Not Found | WisdomTree Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
          <div className="w-full max-w-md text-center">
            <div className="mb-8">
              <h1 className="mb-4 text-9xl font-bold text-indigo-600">404</h1>
              <h2 className="mb-2 text-3xl font-semibold text-gray-800">Page Not Found</h2>
              <p className="mb-8 text-gray-600">
                Sorry, the page you&apos;re looking for doesn&apos;t exist or may have been moved.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="/en-us/homepage"
                className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-indigo-700"
              >
                Go to Homepage
              </a>

              <div className="text-sm text-gray-500">
                <p className="mb-2">Or try these links:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <a href="/en-us/homepage" className="text-indigo-600 hover:text-indigo-800">
                    English (US)
                  </a>
                  <span className="text-gray-400">|</span>
                  <a href="/en-uk/homepage" className="text-indigo-600 hover:text-indigo-800">
                    English (UK)
                  </a>
                  <span className="text-gray-400">|</span>
                  <a href="/es/homepage" className="text-indigo-600 hover:text-indigo-800">
                    Español
                  </a>
                  <span className="text-gray-400">|</span>
                  <a href="/fr/homepage" className="text-indigo-600 hover:text-indigo-800">
                    Français
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 text-xs text-gray-400">
              <p>WisdomTree Sanity.io + Next.js Demo</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
