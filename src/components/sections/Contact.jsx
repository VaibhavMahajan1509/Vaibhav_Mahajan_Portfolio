import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import SectionHeader from "../ui/SectionHeader";
import { links } from "../../constants/links";

function Contact() {
  return (
    <section id="contact" className="relative section-padding px-6 py-28">
      <SectionHeader
        badge="Let's Connect"
        title="Let's Build Something Amazing Together"
        subtitle="I'm actively looking for React.js, MERN Stack internships and fresher opportunities. Feel free to reach out for collaboration or hiring."
      />

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        {/* Left Side */}
        <div className="glass-card rounded-[2rem] p-8">
          <h3 className="text-3xl font-black">
            Available for Opportunities 🚀
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            I'm currently looking for internship and full-time opportunities in
            React.js and MERN Stack development. If you think I'd be a good fit
            for your team, let's connect.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="social-icon">
                <HiOutlineMail size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-400">Email</p>
                <a
                  href="mailto:vaibhav.mahajan1509@gmail.com"
                  className="font-semibold hover:text-cyan-300"
                >
                  vaibhav.mahajan1509@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="social-icon">
                <HiOutlinePhone size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <a
                  href="tel:+916267090678"
                  className="font-semibold hover:text-cyan-300"
                >
                  +91 62670 90692
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="social-icon">
                <HiOutlineLocationMarker size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="font-semibold">
                  Indore, Madhya Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="glass-card rounded-[2rem] p-8">
          <h3 className="text-2xl font-black">
            Connect With Me
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            You can also find me on these platforms.
          </p>

          <div className="mt-8 space-y-5">
            <a
              href="https://github.com/VaibhavMahajan1509"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-4">
                <FaGithub className="text-2xl" />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-slate-400">
                    github.com/VaibhavMahajan1509
                  </p>
                </div>
              </div>

              →
            </a>

            <a
              href={links.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-2xl text-[#0A66C2]" />

                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-slate-400">
                    linkedin.com/in/vaibhav-mahajan-aa6592234
                  </p>
                </div>
              </div>

              →
            </a>

            <a
              href={`mailto:${links.email}`}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-4 font-bold transition hover:scale-[1.02]"
            >
              <HiOutlineMail size={20} />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;