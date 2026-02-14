import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, HelpCircle, ChevronRight, Zap, Target, Palette, Cpu, Shield, CreditCard, Globe } from "lucide-react";

const ServiceCustomizer = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // AI Strategy Session Data
        business_type: "",
        industry: "",
        target_audience: "",
        primary_goals: [],
        brand_tone: "",
        budget_range: "",
        timeline: "",
        special_requirements: "",

        // Service Type
        service_type: "fullstack",

        // User Selections
        selected_pages: [],
        selected_features: [],
        selected_sections: [],
        custom_content: {},

        // Design & Styling
        color_palette: {
            primary: "#4f8b05", // Using your accent color
            secondary: "#1a1a1a",
            accent: "#4f8b05",
            background: "#ffffff",
            text: "#1a1a1a"
        },
        font_preferences: {
            heading: "Inter",
            body: "Inter",
            accent: "Geist Mono"
        },

        // PricingSection
        estimated_price: 0,
        discount_code: ""
    });

    const totalSteps = 6;
    const stepTitles = [
        "Business Strategy",
        "Service Type",
        "Pages & Structure",
        "Features",
        "Design",
        "Review & PricingSection"
    ];

    // Available options
    const businessTypes = ["Startup", "Small Business", "Agency", "E-commerce", "SaaS", "Non-Profit", "Other"];
    const industries = ["Technology", "Healthcare", "Education", "Retail", "Finance", "Real Estate", "Hospitality", "Creative", "Consulting", "Other"];
    const goals = ["Generate Leads", "Sell Products", "Brand Awareness", "Customer Service", "Membership Portal", "Information Hub"];
    const brandTones = ["Professional", "Creative", "Friendly", "Luxury", "Modern", "Minimalist", "Bold"];
    const budgetRanges = ["Under R5,000", "R5,000 - R10,000", "R10,000 - R15,000", "R15,000 - R20,000", "Custom Enterprise"];
    const timelines = ["ASAP (2-3 weeks)", "Standard (3-4 weeks)", "Flexible (4-6 weeks)", "Extended (6+ weeks)"];

    const serviceTypes = [
        { id: "fullstack", name: "Full Stack Website", desc: "Complete website with frontend & backend", price: 8500, icon: <Globe className="size-5" /> },
        { id: "frontend_only", name: "Frontend Only", desc: "Beautiful frontend with API integration", price: 5000, icon: <Cpu className="size-5" /> },
        { id: "ecommerce", name: "E-commerce Store", desc: "Online store with payment system", price: 15000, icon: <CreditCard className="size-5" /> }
    ];

    const pages = [
        { id: "home", name: "Home Page", basePrice: 1000, selected: false },
        { id: "about", name: "About Us", basePrice: 800, selected: false },
        { id: "services", name: "Services", basePrice: 800, selected: false },
        { id: "portfolio", name: "Portfolio/Gallery", basePrice: 1200, selected: false },
        { id: "blog", name: "Blog/News", basePrice: 1500, selected: false },
        { id: "contact", name: "Contact", basePrice: 600, selected: false },
        { id: "pricing", name: "Pricing Page", basePrice: 1000, selected: false },
        { id: "testimonials", name: "Testimonials", basePrice: 700, selected: false },
        { id: "team", name: "Team Page", basePrice: 900, selected: false },
        { id: "faq", name: "FAQ Page", basePrice: 600, selected: false }
    ];

    const features = [
        { id: "contact_form", name: "Contact Form", basePrice: 500, selected: false },
        { id: "newsletter", name: "Newsletter Signup", basePrice: 400, selected: false },
        { id: "live_chat", name: "Live Chat Integration", basePrice: 800, selected: false },
        { id: "booking", name: "Booking/Calendar System", basePrice: 1500, selected: false },
        { id: "payment", name: "Payment Integration", basePrice: 2000, selected: false },
        { id: "membership", name: "Membership System", basePrice: 2500, selected: false },
        { id: "seo", name: "Advanced SEO Setup", basePrice: 1000, selected: false },
        { id: "analytics", name: "Analytics Dashboard", basePrice: 600, selected: false },
        { id: "multilingual", name: "Multilingual Support", basePrice: 1200, selected: false },
        { id: "admin_panel", name: "Admin Panel", basePrice: 1800, selected: false }
    ];

    const designThemes = [
        { id: "modern", name: "Modern", colors: ["#4f8b05", "#1a1a1a", "#ffffff"], preview: "bg-gradient-to-br from-accent to-gray-900" },
        { id: "minimal", name: "Minimal", colors: ["#000000", "#ffffff", "#f5f5f5"], preview: "bg-gradient-to-br from-black to-white" },
        { id: "creative", name: "Creative", colors: ["#8b5cf6", "#ec4899", "#fbbf24"], preview: "bg-gradient-to-br from-purple-500 to-pink-500" },
        { id: "professional", name: "Professional", colors: ["#2563eb", "#1e40af", "#f8fafc"], preview: "bg-gradient-to-br from-blue-600 to-blue-900" }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleArrayToggle = (field, value) => {
        setFormData(prev => {
            const currentArray = prev[field] || [];
            const newArray = currentArray.includes(value)
                ? currentArray.filter(item => item !== value)
                : [...currentArray, value];
            return { ...prev, [field]: newArray };
        });
    };

    const calculatePrice = () => {
        let basePrice = serviceTypes.find(s => s.id === formData.service_type)?.price || 0;

        // Add page costs
        const pageCost = pages
            .filter(p => formData.selected_pages.includes(p.id))
            .reduce((sum, page) => sum + page.basePrice, 0);

        // Add feature costs
        const featureCost = features
            .filter(f => formData.selected_features.includes(f.id))
            .reduce((sum, feature) => sum + feature.basePrice, 0);

        // Add timeline premium (ASAP costs more)
        const timelinePremium = formData.timeline === "ASAP (2-3 weeks)" ? 1000 : 0;

        return basePrice + pageCost + featureCost + timelinePremium;
    };

    const handleSubmit = async () => {
        try {
            // Calculate AI recommendations (simplified version)
            const aiRecommendations = {
                ai_recommended_pages: generatePageRecommendations(),
                ai_recommended_features: generateFeatureRecommendations(),
                ai_recommended_sections: ["hero", "features", "testimonials", "cta"],
                ai_content_suggestions: generateContentSuggestions()
            };

            const finalData = {
                ...formData,
                ...aiRecommendations,
                estimated_price: calculatePrice(),
                status: "draft"
            };

            // Save to backend
            const response = await fetch('/api/services/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(finalData)
            });

            if (response.ok) {
                navigate('/checkout', { state: { serviceData: finalData } });
            }
        } catch (error) {
            console.error('Error submitting service:', error);
        }
    };

    const generatePageRecommendations = () => {
        const recommendations = ["home", "about", "contact"];
        if (formData.primary_goals.includes("Sell Products")) recommendations.push("services");
        if (formData.industry === "Creative") recommendations.push("portfolio");
        return [...new Set(recommendations)];
    };

    const generateFeatureRecommendations = () => {
        const recommendations = ["contact_form"];
        if (formData.primary_goals.includes("Generate Leads")) recommendations.push("newsletter");
        if (formData.service_type === "ecommerce") recommendations.push("payment", "admin_panel");
        return [...new Set(recommendations)];
    };

    const generateContentSuggestions = () => {
        return {
            hero_headline: `Transform Your ${formData.industry} Business`,
            about_text: `We help ${formData.business_type.toLowerCase()} in the ${formData.industry} industry...`,
            cta_text: "Get Started Today"
        };
    };

    const renderStep = () => {
        switch(currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Target className="text-accent" /> Business Strategy
                        </h2>
                        <p className="text-gray-600">Tell us about your business for AI-powered recommendations</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Business Type</label>
                                <select
                                    className="w-full p-3 border rounded-lg"
                                    value={formData.business_type}
                                    onChange={(e) => handleInputChange('business_type', e.target.value)}
                                >
                                    <option value="">Select Type</option>
                                    {businessTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Industry</label>
                                <select
                                    className="w-full p-3 border rounded-lg"
                                    value={formData.industry}
                                    onChange={(e) => handleInputChange('industry', e.target.value)}
                                >
                                    <option value="">Select Industry</option>
                                    {industries.map(industry => (
                                        <option key={industry} value={industry}>{industry}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2">Target Audience</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-lg"
                                    placeholder="e.g., Young professionals aged 25-40"
                                    value={formData.target_audience}
                                    onChange={(e) => handleInputChange('target_audience', e.target.value)}
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2">Primary Goals</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {goals.map(goal => (
                                        <button
                                            key={goal}
                                            type="button"
                                            className={`p-3 border rounded-lg text-left transition-colors ${
                                                formData.primary_goals.includes(goal)
                                                    ? 'border-accent bg-accent/10'
                                                    : 'hover:border-gray-300'
                                            }`}
                                            onClick={() => handleArrayToggle('primary_goals', goal)}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{goal}</span>
                                                {formData.primary_goals.includes(goal) && (
                                                    <CheckCircle className="size-5 text-accent" />
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Brand Tone</label>
                                <select
                                    className="w-full p-3 border rounded-lg"
                                    value={formData.brand_tone}
                                    onChange={(e) => handleInputChange('brand_tone', e.target.value)}
                                >
                                    <option value="">Select Tone</option>
                                    {brandTones.map(tone => (
                                        <option key={tone} value={tone}>{tone}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Budget Range</label>
                                <select
                                    className="w-full p-3 border rounded-lg"
                                    value={formData.budget_range}
                                    onChange={(e) => handleInputChange('budget_range', e.target.value)}
                                >
                                    <option value="">Select Budget</option>
                                    {budgetRanges.map(budget => (
                                        <option key={budget} value={budget}>{budget}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Timeline</label>
                                <select
                                    className="w-full p-3 border rounded-lg"
                                    value={formData.timeline}
                                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                                >
                                    <option value="">Select Timeline</option>
                                    {timelines.map(timeline => (
                                        <option key={timeline} value={timeline}>{timeline}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2">Special Requirements</label>
                                <textarea
                                    className="w-full p-3 border rounded-lg h-32"
                                    placeholder="Any specific features, integrations, or requirements..."
                                    value={formData.special_requirements}
                                    onChange={(e) => handleInputChange('special_requirements', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Cpu className="text-accent" /> Service Type
                        </h2>
                        <p className="text-gray-600">Choose the type of website service you need</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {serviceTypes.map(service => (
                                <button
                                    key={service.id}
                                    type="button"
                                    className={`p-6 border-2 rounded-xl text-left transition-all hover:shadow-lg ${
                                        formData.service_type === service.id
                                            ? 'border-accent bg-accent/5'
                                            : 'border-gray-200'
                                    }`}
                                    onClick={() => handleInputChange('service_type', service.id)}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-2 bg-accent/10 rounded-lg">
                                            {service.icon}
                                        </div>
                                        {formData.service_type === service.id && (
                                            <CheckCircle className="size-6 text-accent" />
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                                    <p className="text-gray-600 mb-4">{service.desc}</p>
                                    <div className="text-2xl font-bold text-accent">
                                        R{service.price.toLocaleString()}
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                            <div className="flex items-start gap-3">
                                <HelpCircle className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-blue-900 mb-1">AI Recommendation</h4>
                                    <p className="text-blue-700 text-sm">
                                        Based on your business type "{formData.business_type}" and goals "{formData.primary_goals.join(', ')}",
                                        we recommend the <strong>{
                                        formData.primary_goals.includes("Sell Products") ? "E-commerce Store" :
                                            formData.business_type === "SaaS" ? "Full Stack Website" : "Full Stack Website"
                                    }</strong> service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Globe className="text-accent" /> Pages & Structure
                        </h2>
                        <p className="text-gray-600">Select which pages you need for your website</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {pages.map(page => (
                                <button
                                    key={page.id}
                                    type="button"
                                    className={`p-4 border rounded-lg text-left transition-colors ${
                                        formData.selected_pages.includes(page.id)
                                            ? 'border-accent bg-accent/10'
                                            : 'hover:border-gray-300'
                                    }`}
                                    onClick={() => handleArrayToggle('selected_pages', page.id)}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium">{page.name}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-accent font-bold">R{page.basePrice}</span>
                                            {formData.selected_pages.includes(page.id) && (
                                                <CheckCircle className="size-5 text-accent" />
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {page.id === 'home' && 'Main landing page with hero section'}
                                        {page.id === 'about' && 'Company story and team information'}
                                        {page.id === 'services' && 'Detailed service offerings'}
                                        {page.id === 'portfolio' && 'Showcase your work or products'}
                                        {page.id === 'blog' && 'Content marketing and articles'}
                                        {page.id === 'contact' && 'Contact information and form'}
                                        {page.id === 'pricing' && 'Service packages and pricing'}
                                        {page.id === 'testimonials' && 'Customer reviews and case studies'}
                                        {page.id === 'team' && 'Team member profiles'}
                                        {page.id === 'faq' && 'Frequently asked questions'}
                                    </p>
                                </button>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold">Selected Pages</h4>
                                    <p className="text-sm text-gray-600">
                                        {formData.selected_pages.length} pages selected
                                    </p>
                                </div>
                                <div className="text-lg font-bold text-accent">
                                    R{formData.selected_pages.reduce((sum, pageId) => {
                                    const page = pages.find(p => p.id === pageId);
                                    return sum + (page?.basePrice || 0);
                                }, 0).toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Zap className="text-accent" /> Features & Functionality
                        </h2>
                        <p className="text-gray-600">Add powerful features to your website</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {features.map(feature => (
                                <button
                                    key={feature.id}
                                    type="button"
                                    className={`p-4 border rounded-lg text-left transition-colors ${
                                        formData.selected_features.includes(feature.id)
                                            ? 'border-accent bg-accent/10'
                                            : 'hover:border-gray-300'
                                    }`}
                                    onClick={() => handleArrayToggle('selected_features', feature.id)}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium">{feature.name}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-accent font-bold">R{feature.basePrice}</span>
                                            {formData.selected_features.includes(feature.id) && (
                                                <CheckCircle className="size-5 text-accent" />
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {feature.id === 'contact_form' && 'Custom contact form with email notifications'}
                                        {feature.id === 'newsletter' && 'Email newsletter integration'}
                                        {feature.id === 'live_chat' && 'Live chat support integration'}
                                        {feature.id === 'booking' && 'Appointment booking system'}
                                        {feature.id === 'payment' && 'Secure payment processing'}
                                        {feature.id === 'membership' && 'User registration and membership'}
                                        {feature.id === 'seo' && 'Advanced search engine optimization'}
                                        {feature.id === 'analytics' && 'Website analytics dashboard'}
                                        {feature.id === 'multilingual' && 'Multiple language support'}
                                        {feature.id === 'admin_panel' && 'Content management system'}
                                    </p>
                                </button>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold">Selected Features</h4>
                                    <p className="text-sm text-gray-600">
                                        {formData.selected_features.length} features selected
                                    </p>
                                </div>
                                <div className="text-lg font-bold text-accent">
                                    R{formData.selected_features.reduce((sum, featureId) => {
                                    const feature = features.find(f => f.id === featureId);
                                    return sum + (feature?.basePrice || 0);
                                }, 0).toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Palette className="text-accent" /> Design & Branding
                        </h2>
                        <p className="text-gray-600">Customize the look and feel of your website</p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold mb-4">Color Theme</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {designThemes.map(theme => (
                                        <button
                                            key={theme.id}
                                            type="button"
                                            className={`p-4 border-2 rounded-lg transition-all ${
                                                formData.color_palette.primary === theme.colors[0]
                                                    ? 'border-accent ring-2 ring-accent/20'
                                                    : 'border-gray-200'
                                            }`}
                                            onClick={() => handleInputChange('color_palette', {
                                                primary: theme.colors[0],
                                                secondary: theme.colors[1],
                                                accent: theme.colors[0],
                                                background: "#ffffff",
                                                text: "#1a1a1a"
                                            })}
                                        >
                                            <div className={`h-24 rounded-lg mb-3 ${theme.preview}`} />
                                            <div className="text-center font-medium">{theme.name}</div>
                                            <div className="flex justify-center gap-1 mt-2">
                                                {theme.colors.map((color, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="w-6 h-6 rounded-full border"
                                                        style={{ backgroundColor: color }}
                                                    />
                                                ))}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-4">Custom Colors</h3>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                    {Object.entries(formData.color_palette).map(([key, value]) => (
                                        <div key={key} className="space-y-2">
                                            <label className="block text-sm font-medium capitalize">
                                                {key.replace('_', ' ')}
                                            </label>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="color"
                                                    value={value}
                                                    onChange={(e) => handleInputChange('color_palette', {
                                                        ...formData.color_palette,
                                                        [key]: e.target.value
                                                    })}
                                                    className="w-10 h-10 cursor-pointer"
                                                />
                                                <input
                                                    type="text"
                                                    value={value}
                                                    onChange={(e) => handleInputChange('color_palette', {
                                                        ...formData.color_palette,
                                                        [key]: e.target.value
                                                    })}
                                                    className="flex-1 p-2 border rounded"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-4">Typography</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {Object.entries(formData.font_preferences).map(([key, value]) => (
                                        <div key={key}>
                                            <label className="block text-sm font-medium mb-2 capitalize">
                                                {key} Font
                                            </label>
                                            <select
                                                className="w-full p-3 border rounded-lg"
                                                value={value}
                                                onChange={(e) => handleInputChange('font_preferences', {
                                                    ...formData.font_preferences,
                                                    [key]: e.target.value
                                                })}
                                            >
                                                <option value="Inter">Inter (Modern)</option>
                                                <option value="Geist Mono">Geist Mono (Tech)</option>
                                                <option value="Montserrat">Montserrat (Clean)</option>
                                                <option value="Playfair Display">Playfair (Elegant)</option>
                                                <option value="Roboto">Roboto (Universal)</option>
                                            </select>
                                            <div className="mt-2 p-2 border rounded text-center" style={{ fontFamily: value }}>
                                                Aa Bb Cc
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 6:
                const totalPrice = calculatePrice();
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Shield className="text-accent" /> Review & Pricing
                        </h2>
                        <p className="text-gray-600">Review your selections and get your final price</p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold mb-4">Service Summary</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Service Type</span>
                                            <span className="font-bold">
                                                {serviceTypes.find(s => s.id === formData.service_type)?.name}
                                            </span>
                                        </div>

                                        <div>
                                            <h4 className="font-medium mb-2">Selected Pages:</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {formData.selected_pages.map(pageId => {
                                                    const page = pages.find(p => p.id === pageId);
                                                    return (
                                                        <div key={pageId} className="flex justify-between text-sm">
                                                            <span>{page?.name}</span>
                                                            <span className="text-accent">R{page?.basePrice}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-medium mb-2">Selected Features:</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {formData.selected_features.map(featureId => {
                                                    const feature = features.find(f => f.id === featureId);
                                                    return (
                                                        <div key={featureId} className="flex justify-between text-sm">
                                                            <span>{feature?.name}</span>
                                                            <span className="text-accent">R{feature?.basePrice}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {formData.timeline === "ASAP (2-3 weeks)" && (
                                            <div className="flex justify-between border-b pb-2">
                                                <span>ASAP Timeline Premium</span>
                                                <span className="text-accent">R1,000</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                                        <Zap className="text-blue-600" /> AI Recommendations Included
                                    </h3>
                                    <p className="text-blue-700 mb-4">
                                        Based on your business strategy, our AI will provide:
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="size-5 text-blue-600" />
                                            <span>Optimal page structure and layout</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="size-5 text-blue-600" />
                                            <span>Content strategy and suggestions</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="size-5 text-blue-600" />
                                            <span>SEO optimization plan</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="size-5 text-blue-600" />
                                            <span>User experience improvements</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                                    <h3 className="text-lg font-bold mb-4">Pricing Summary</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span>Base Service</span>
                                            <span>R{serviceTypes.find(s => s.id === formData.service_type)?.price}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Additional Pages</span>
                                            <span>R{formData.selected_pages.reduce((sum, pageId) => {
                                                const page = pages.find(p => p.id === pageId);
                                                return sum + (page?.basePrice || 0);
                                            }, 0)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Additional Features</span>
                                            <span>R{formData.selected_features.reduce((sum, featureId) => {
                                                const feature = features.find(f => f.id === featureId);
                                                return sum + (feature?.basePrice || 0);
                                            }, 0)}</span>
                                        </div>
                                        {formData.timeline === "ASAP (2-3 weeks)" && (
                                            <div className="flex justify-between">
                                                <span>Timeline Premium</span>
                                                <span>R1,000</span>
                                            </div>
                                        )}
                                        <div className="border-t pt-3 mt-3">
                                            <div className="flex justify-between text-lg font-bold">
                                                <span>Total</span>
                                                <span className="text-accent">R{totalPrice.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Discount Code</label>
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    className="flex-1 p-3 border rounded-lg"
                                                    placeholder="Enter code"
                                                    value={formData.discount_code}
                                                    onChange={(e) => handleInputChange('discount_code', e.target.value)}
                                                />
                                                <button
                                                    type="button"
                                                    className="px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                                                >
                                                    Apply
                                                </button>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleSubmit}
                                            className="w-full py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                                        >
                                            Proceed to Checkout
                                            <ArrowRight className="size-5" />
                                        </button>

                                        <p className="text-center text-sm text-gray-600">
                                            30-day satisfaction guarantee
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-geist-mono">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                        {stepTitles.map((title, index) => (
                            <div key={index} className="flex items-center">
                                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                                    currentStep > index + 1 ? 'bg-accent text-white' :
                                        currentStep === index + 1 ? 'bg-accent text-white ring-4 ring-accent/20' :
                                            'bg-gray-200 text-gray-600'
                                }`}>
                                    {currentStep > index + 1 ? (
                                        <CheckCircle className="size-5" />
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                                <span className={`ml-3 font-medium hidden md:block ${
                                    currentStep === index + 1 ? 'text-accent' : 'text-gray-600'
                                }`}>
                                    {title}
                                </span>
                                {index < stepTitles.length - 1 && (
                                    <div className={`hidden md:block w-20 h-1 mx-4 ${
                                        currentStep > index + 1 ? 'bg-accent' : 'bg-gray-200'
                                    }`} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-accent h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
                    {renderStep()}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
                            currentStep === 1
                                ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400'
                                : 'bg-gray-800 text-white hover:bg-gray-900'
                        }`}
                    >
                        ← Previous
                    </button>

                    {currentStep < totalSteps ? (
                        <button
                            onClick={nextStep}
                            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 flex items-center gap-2"
                        >
                            Continue
                            <ChevronRight className="size-5" />
                        </button>
                    ) : null}
                </div>

                {/* Price Preview */}
                {currentStep > 1 && (
                    <div className="fixed bottom-4 right-4 bg-white rounded-xl shadow-xl border p-4 min-w-48">
                        <div className="text-sm text-gray-600 mb-1">Estimated Total</div>
                        <div className="text-2xl font-bold text-accent">R{calculatePrice().toLocaleString()}</div>
                        <div className="text-xs text-gray-500 mt-1">Customize to adjust price</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceCustomizer;