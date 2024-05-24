
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
                Chandra, developed the frontend of this website using React and created the Support vector machine model in machine learning.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Loading..."
                className="rounded-full"
                height={150}
                src="../src/assets/DP/arunanshu.jpg"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "fill",
                }}
                width={150}
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Arunanshu Patra</h3>
                {/* <p className="text-gray-500 dark:text-gray-400">Data Scientist</p> */}
                <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                Arunanshu, developed the backend of project and worked on Feature Engineering & also on Gaussian Naive Bayes Model .
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Loading..."
                className="rounded-full"
                height={150}
                src="../src/assets/DP/monodeep.jpg"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "fill",
                }}
                width={150}
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Monodeep Biswas</h3>
                <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                  Monodeep, worked on EDA of this project for better analysis and created the k-NN model .
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Loading..."
                className="rounded-full"
                height={150}
                src="../src/assets/DP/dipak.jpg"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "absolute",
                }}
                width={150}
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Dipak Kumar Yadav</h3>
                <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                  Dipak, worked on Data cleaning and preprocessing of this prject and worked on Decision Tree Model.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Loading..."
                className="rounded-full"
                height={150}
                src="../src/assets/DP/joy.jpg"
                style={{
                  aspectRatio: "150/150",
                  objectFit:"fill",
                }}
                width={150}
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Joy Chatterjee</h3>
                <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                  Joy, worked on Logistic Regression Model of this project.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }