
export default function About() {
    return (
      <main className="w-full flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 container mx-auto">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Stress Level Detection Project
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our team of experts has developed a cutting-edge solution to monitor and manage stress levels, helping
                  individuals and organizations improve well-being and productivity.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 container mx-auto">
          <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Loading..."
                className="rounded-full"
                height={150}
                src="../src/assets/DP/chandra.jpg"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width={150}
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Chandra Sekhar Karmakar</h3>
                {/* <p className="text-gray-500 dark:text-gray-400">Project Lead</p> */}
                <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                Chandra developed this website and created an SVM model in machine learning.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Loading..."
                className="rounded-full"
                height={150}
                src="https://via.placeholder.com/150"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width={150}
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Arunanshu Patra</h3>
                {/* <p className="text-gray-500 dark:text-gray-400">Data Scientist</p> */}
                <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                Arunanshu, a skilled data scientist specializing in machine learning and data analysis, developed the project's data visualization and analysis capabilities, powering its cutting-edge algorithms.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Michael Johnson"
                className="rounded-full"
                height={150}
                src="https://via.placeholder.com/150"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width={150}
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Michael Johnson</h3>
                <p className="text-gray-500 dark:text-gray-400">Software Engineer</p>
                <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                  Michael is a talented software engineer who has been instrumental in building the project's robust and
                  user-friendly platform.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Emily Davis"
                className="rounded-full"
                height={150}
                src="https://via.placeholder.com/150"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width={150}
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Emily Davis</h3>
                <p className="text-gray-500 dark:text-gray-400">UX Designer</p>
                <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                  Emily is a user experience designer who has crafted the intuitive and visually appealing interface of
                  the project, ensuring a seamless user experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="David Lee"
                className="rounded-full"
                height={150}
                src="https://via.placeholder.com/150"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width={150}
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">David Lee</h3>
                <p className="text-gray-500 dark:text-gray-400">Clinical Psychologist</p>
                <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                  David is a clinical psychologist who has provided valuable insights and expertise to ensure the
                  project's effectiveness in supporting mental health and well-being.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }