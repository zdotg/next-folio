import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer className="text-center min-h-100 bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 p-5">
        <p>
          &copy; {new Date().getFullYear().toString()} created by Zach Gallman
        </p>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center">
              <h5 className="text-xl font-semibold mb-4">Socials</h5>
              <div className="flex justify-center space-x-4">
                {/* Github */}
                <a
                  href="https://github.com/zdotg"
                  role="button"
                  className="text-2xl"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/zach-gallman/"
                  role="button"
                  className="text-2xl"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="contact-info mt-4 md:mt-0">
                {/* Zach Email */}
                <a
                  href="mailto:zach.ecab@gmail.com"
                  role="button"
                  className="contact-link  text-lg my-2 flex justify-center items-center"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ width: "20px", height: "20px" }}
                  />
                  <span className="ml-1">zach.ecab@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
