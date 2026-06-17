import { z } from "zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { sendMessage } from "../api/contactApi";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z.email("Please enter a valid email"),

  phone: z.string().optional(),

  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await sendMessage(data);

      toast.success(
        "Message sent successfully!"
      );

      reset();
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to send message"
      );
    }
  };

  return (
    <section className="py-24 bg-[#0B1120] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with the Trishakti FabLab team for
            research collaborations, AI systems,
            drone technology, AR/VR solutions,
            and innovation projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left Side */}
          <div
            className="
            bg-[#111827]
            rounded-2xl
            p-8
            border
            border-gray-800
            "
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-blue-400 font-semibold">
                  Email
                </p>

                <p className="text-gray-300">
                  contact@fablab.com
                </p>
              </div>

              <div>
                <p className="text-blue-400 font-semibold">
                  Phone
                </p>

                <p className="text-gray-300">
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div>
                <p className="text-blue-400 font-semibold">
                  Location
                </p>

                <p className="text-gray-300">
                  Trishakti FabLab,
                  Sukna Army Cantt
                </p>
              </div>

            </div>

            <div className="mt-10">
              <iframe
                title="location"
                className="w-full h-64 rounded-xl"
                src="https://maps.google.com/maps?q=Sukna&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

          {/* Right Side Form */}
          <div
            className="
            bg-[#111827]
            rounded-2xl
            p-8
            border
            border-gray-800
            shadow-xl
            "
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <input
                  {...register("name")}
                  placeholder="Full Name"
                  className="
                  w-full
                  bg-[#1F2937]
                  text-white
                  border
                  border-gray-700
                  rounded-xl
                  p-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  "
                />

                {errors.name && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  {...register("email")}
                  placeholder="Email Address"
                  className="
                  w-full
                  bg-[#1F2937]
                  text-white
                  border
                  border-gray-700
                  rounded-xl
                  p-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  "
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  className="
                  w-full
                  bg-[#1F2937]
                  text-white
                  border
                  border-gray-700
                  rounded-xl
                  p-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  "
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  {...register("subject")}
                  placeholder="Subject"
                  className="
                  w-full
                  bg-[#1F2937]
                  text-white
                  border
                  border-gray-700
                  rounded-xl
                  p-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  "
                />

                {errors.subject && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows="6"
                  {...register("message")}
                  placeholder="Your Message"
                  className="
                  w-full
                  bg-[#1F2937]
                  text-white
                  border
                  border-gray-700
                  rounded-xl
                  p-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  "
                />

                {errors.message && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                transition
                text-white
                py-4
                rounded-xl
                font-semibold
                disabled:opacity-50
                disabled:cursor-not-allowed
                "
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Message"}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;