export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 text-white flex items-center justify-center"
    >
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-60 h-60 bg-white/10 rounded-full -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-36 -right-32 animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-start gap-12 px-6">
        {/* Left side - Social links */}
<div className="flex flex-col items-center justify-center text-center gap-6 w-full md:w-1/3 h-full -translate-x-3">
          <h2 className="text-4xl font-bold drop-shadow-lg mt-4">Connect with Me</h2>
          <p className="text-white/90 drop-shadow-md mt-2 mb-4">
            Check out my profiles or drop me an email!
          </p>
          <div className="flex flex-col gap-6">
            {/* GitHub */}
            <a href="https://github.com/bandimuralichowdary" target="_blank" className="flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all transform hover:scale-105">
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
              </svg>
              <span className="text-white font-semibold">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/murali-krishna-bandi-b04bbb220/" target="_blank" className="flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all transform hover:scale-105">
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
              </svg>
              <span className="text-white font-semibold">LinkedIn</span>
            </a>

            {/* Email */}
            <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=muralibandi2004@gmail.com"
  target="_blank"
  className="flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all transform hover:scale-105"
>
  <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clipRule="evenodd"/>
  </svg>
  <span className="text-white font-semibold">Email</span>
</a>

          </div>
        </div>

        {/* Right side - Contact Form */}
        <form 
  action="https://api.web3forms.com/submit"
  method="POST"
  className="flex flex-col gap-6 glass-card p-10 shadow-2xl backdrop-blur-3xl rounded-2xl w-full md:w-2/3"
>
  {/* Web3Forms Access Key */}
  <input type="hidden" name="access_key" value="f2adc0a8-9f27-4d6c-b038-50c2d7e3b209" />

  <input 
    type="text" 
    name="name"
    placeholder="Your Name" 
    required
    className="p-4 rounded-xl border border-white/20 bg-white/10 placeholder-white/70 text-white focus:ring-2 focus:ring-pink-500 transition-all"
  />

  <input 
    type="email"
    name="email"
    placeholder="Your Email" 
    required
    className="p-4 rounded-xl border border-white/20 bg-white/10 placeholder-white/70 text-white focus:ring-2 focus:ring-pink-500 transition-all"
  />

  <textarea 
    rows="5" 
    name="message"
    placeholder="Your Message" 
    required
    className="p-4 rounded-xl border border-white/20 bg-white/10 placeholder-white/70 text-white focus:ring-2 focus:ring-pink-500 transition-all"
  />

  <button 
    type="submit" 
    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl font-semibold shadow-2xl transform hover:scale-105 transition-all"
  >
    Send Message
  </button>
</form>
      </div>
    </section>
  );
}
