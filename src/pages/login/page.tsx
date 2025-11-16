import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/base/Button';
import { supabase } from '../../lib/supabaseClient';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    phoneNumber: '',
    password: '',
    industry: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validation
      if (!formData.email || !formData.companyName || !formData.phoneNumber || !formData.industry || !formData.password) {
        throw new Error('Please fill in all fields');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) throw new Error('Invalid email');

      if (formData.password.length < 6)
        throw new Error('Password must be at least 6 characters');

      // 1️⃣ Create user in Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password
      });

      if (signUpError) throw signUpError;

      const user = data.user;
      if (!user) throw new Error("Signup failed");

      // 2️⃣ Insert Profile into Supabase table
      const { error: profileError } = await supabase.from('profiles').insert({
        id: user.id,
        email: formData.email,
        company_name: formData.companyName,
        phone_number: formData.phoneNumber,
        industry: formData.industry
      });

      if (profileError) throw profileError;

      // 3️⃣ Redirect
      navigate('/signup-success');

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail',
    'Education', 'Real Estate', 'Consulting', 'Marketing', 'Transportation',
    'Energy', 'Agriculture', 'Entertainment', 'Government', 'Non-profit', 'Other'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-accent/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <img 
              src="https://static.readdy.ai/image/3d57a04e89a19f07dff1eb2283051a78/a8199948088849e89fd2a9a7b2004f68.png"
              alt="Logo"
              className="h-24 w-auto mx-auto"
            />
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-textDark">Join Offshorebrücke</h2>
          <p className="mt-2 text-sm text-textLight">Create your account to get started</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-accent/20">

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-textDark mb-2">
                Email address *
              </label>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-3 py-3 border rounded-lg"
                placeholder="you@example.com"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-textDark mb-2">
                Company name *
              </label>
              <input
                name="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={handleChange}
                className="block w-full px-3 py-3 border rounded-lg"
                placeholder="Your company"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-textDark mb-2">
                Phone number *
              </label>
              <input
                name="phoneNumber"
                type="tel"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block w-full px-3 py-3 border rounded-lg"
                placeholder="+49 123 456 7890"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-medium text-textDark mb-2">
                Industry *
              </label>

              <select
                name="industry"
                required
                value={formData.industry}
                onChange={handleChange}
                className="block w-full px-3 py-3 border rounded-lg"
              >
                <option value="">Select your industry</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-textDark mb-2">
                Create password *
              </label>
              <input
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-3 py-3 border rounded-lg"
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </Button>

          </form>
        </div>
      </div>
    </div>
  );
}
