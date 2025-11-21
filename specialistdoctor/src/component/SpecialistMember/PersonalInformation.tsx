import React, { useState } from "react";

interface FormDataType {
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
}

interface ErrorsType {
  [key: string]: string;
}

export default function PersonalInfoForm() {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): ErrorsType => {
    const newErrors: ErrorsType = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "This is required";
    } else if (/\d/.test(formData.firstName)) {
      newErrors.firstName = "First name cannot contain numbers";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "This is required";
    } else if (/\d/.test(formData.lastName)) {
      newErrors.lastName = "Last name cannot contain numbers";
    }
    if (formData.middleName.trim() && /\d/.test(formData.middleName)) {
      newErrors.middleName = "Middle name cannot contain numbers";
    }
    if (!formData.address.trim()) {
      newErrors.address = "This is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "This is required";
    }
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "This is required";
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setErrors({});

      setTimeout(() => {
        setFormData({
          firstName: "",
          middleName: "",
          lastName: "",
          address: "",
          email: "",
          phoneNumber: "",
          dateOfBirth: "",
        });
        setSubmitted(false);
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      address: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Personal Information Form
        </h1>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ Form submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                First Name *
              </label>
              {errors.firstName && (
                <p className="text-red-600 text-sm mb-2">{errors.firstName}</p>
              )}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.firstName
                    ? "border-red-500 bg-red-50 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Middle Name
              </label>
              {errors.middleName && (
                <p className="text-red-600 text-sm mb-2">{errors.middleName}</p>
              )}
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Michael"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.middleName
                    ? "border-red-500 bg-red-50 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Last Name *
              </label>
              {errors.lastName && (
                <p className="text-red-600 text-sm mb-2">{errors.lastName}</p>
              )}
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.lastName
                    ? "border-red-500 bg-red-50 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Address *
            </label>
            {errors.address && (
              <p className="text-red-600 text-sm mb-2">{errors.address}</p>
            )}
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main Street, City, State, ZIP"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.address
                  ? "border-red-500 bg-red-50 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            {errors.email && (
              <p className="text-red-600 text-sm mb-2">{errors.email}</p>
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 bg-red-50 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            {errors.phoneNumber && (
              <p className="text-red-600 text-sm mb-2">{errors.phoneNumber}</p>
            )}
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.phoneNumber
                  ? "border-red-500 bg-red-50 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Date of Birth (dd/mm/yyyy) *
            </label>
            {errors.dateOfBirth && (
              <p className="text-red-600 text-sm mb-2">{errors.dateOfBirth}</p>
            )}
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.dateOfBirth
                  ? "border-red-500 bg-red-50 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            <p className="text-xs text-gray-500 mt-1">
              Use the calendar picker to select your date of birth
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="flex-1 px-6 py-3 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500 transition-colors shadow-md hover:shadow-lg"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
