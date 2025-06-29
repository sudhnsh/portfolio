"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Globe,
  TrendingDown,
  Shield,
  DollarSign,
  Percent,
  Moon,
  Sun,
  Play,
  Music,
  Tv,
  Video,
  Monitor,
  Gamepad2,
  ChevronDown,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data structure - replace with your API data
const mockPriceData = [
  {
    id: 1,
    product: "Netflix Premium",
    category: "Video Streaming",
    icon: Tv,
    brandColor: "from-red-500 to-red-600",
    brandColorLight: "bg-red-50 border-red-200",
    brandColorDark: "bg-red-950/50 border-red-800",
    basePrice: 15.49,
    baseCurrency: "USD",
    baseCountry: "United States",
    tags: ["Video", "VPN Friendly"],
    prices: [
      {
        country: "Turkey",
        price: 3.27,
        currency: "USD",
        flag: "🇹🇷",
        savings: 78.9,
      },
      {
        country: "Argentina",
        price: 4.12,
        currency: "USD",
        flag: "🇦🇷",
        savings: 73.4,
      },
      {
        country: "India",
        price: 6.24,
        currency: "USD",
        flag: "🇮🇳",
        savings: 59.7,
      },
      {
        country: "Brazil",
        price: 7.89,
        currency: "USD",
        flag: "🇧🇷",
        savings: 49.1,
      },
      {
        country: "Philippines",
        price: 8.99,
        currency: "USD",
        flag: "🇵🇭",
        savings: 42.0,
      },
      {
        country: "Mexico",
        price: 9.99,
        currency: "USD",
        flag: "🇲🇽",
        savings: 35.5,
      },
      {
        country: "United Kingdom",
        price: 17.99,
        currency: "USD",
        flag: "🇬🇧",
        savings: -16.1,
      },
      {
        country: "United States",
        price: 15.49,
        currency: "USD",
        flag: "🇺🇸",
        savings: 0,
      },
    ],
    image: "/placeholder.svg?height=40&width=40",
    vpnFriendly: true,
  },
  {
    id: 2,
    product: "Spotify Premium",
    category: "Music Streaming",
    icon: Music,
    brandColor: "from-green-500 to-green-600",
    brandColorLight: "bg-green-50 border-green-200",
    brandColorDark: "bg-green-950/50 border-green-800",
    basePrice: 10.99,
    baseCurrency: "USD",
    baseCountry: "United States",
    tags: ["Music", "VPN Friendly"],
    prices: [
      {
        country: "India",
        price: 1.58,
        currency: "USD",
        flag: "🇮🇳",
        savings: 85.6,
      },
      {
        country: "Turkey",
        price: 2.31,
        currency: "USD",
        flag: "🇹🇷",
        savings: 79.0,
      },
      {
        country: "Argentina",
        price: 3.45,
        currency: "USD",
        flag: "🇦🇷",
        savings: 68.6,
      },
      {
        country: "Philippines",
        price: 3.89,
        currency: "USD",
        flag: "🇵🇭",
        savings: 64.6,
      },
      {
        country: "Brazil",
        price: 4.99,
        currency: "USD",
        flag: "🇧🇷",
        savings: 54.6,
      },
      {
        country: "Mexico",
        price: 5.99,
        currency: "USD",
        flag: "🇲🇽",
        savings: 45.5,
      },
      {
        country: "United States",
        price: 10.99,
        currency: "USD",
        flag: "🇺🇸",
        savings: 0,
      },
      {
        country: "United Kingdom",
        price: 12.99,
        currency: "USD",
        flag: "🇬🇧",
        savings: -18.2,
      },
    ],
    image: "/placeholder.svg?height=40&width=40",
    vpnFriendly: true,
  },
  {
    id: 3,
    product: "Apple Music",
    category: "Music Streaming",
    icon: Play,
    brandColor: "from-gray-700 to-gray-800",
    brandColorLight: "bg-gray-50 border-gray-200",
    brandColorDark: "bg-gray-900/50 border-gray-700",
    basePrice: 10.99,
    baseCurrency: "USD",
    baseCountry: "United States",
    tags: ["Music", "VPN Restricted"],
    prices: [
      {
        country: "India",
        price: 1.49,
        currency: "USD",
        flag: "🇮🇳",
        savings: 86.4,
      },
      {
        country: "Turkey",
        price: 2.99,
        currency: "USD",
        flag: "🇹🇷",
        savings: 72.8,
      },
      {
        country: "Argentina",
        price: 3.99,
        currency: "USD",
        flag: "🇦🇷",
        savings: 63.7,
      },
      {
        country: "Brazil",
        price: 4.99,
        currency: "USD",
        flag: "🇧🇷",
        savings: 54.6,
      },
      {
        country: "Mexico",
        price: 5.99,
        currency: "USD",
        flag: "🇲🇽",
        savings: 45.5,
      },
      {
        country: "Philippines",
        price: 6.49,
        currency: "USD",
        flag: "🇵🇭",
        savings: 40.9,
      },
      {
        country: "United States",
        price: 10.99,
        currency: "USD",
        flag: "🇺🇸",
        savings: 0,
      },
      {
        country: "United Kingdom",
        price: 11.99,
        currency: "USD",
        flag: "🇬🇧",
        savings: -9.1,
      },
    ],
    image: "/placeholder.svg?height=40&width=40",
    vpnFriendly: false,
  },
  {
    id: 4,
    product: "YouTube Premium",
    category: "Video Streaming",
    icon: Video,
    brandColor: "from-red-600 to-red-700",
    brandColorLight: "bg-red-50 border-red-200",
    brandColorDark: "bg-red-950/50 border-red-800",
    basePrice: 11.99,
    baseCurrency: "USD",
    baseCountry: "United States",
    tags: ["Video", "VPN Friendly"],
    prices: [
      {
        country: "Argentina",
        price: 1.19,
        currency: "USD",
        flag: "🇦🇷",
        savings: 90.1,
      },
      {
        country: "Turkey",
        price: 2.69,
        currency: "USD",
        flag: "🇹🇷",
        savings: 77.6,
      },
      {
        country: "India",
        price: 2.99,
        currency: "USD",
        flag: "🇮🇳",
        savings: 75.1,
      },
      {
        country: "Ukraine",
        price: 4.99,
        currency: "USD",
        flag: "🇺🇦",
        savings: 58.4,
      },
      {
        country: "Philippines",
        price: 6.99,
        currency: "USD",
        flag: "🇵🇭",
        savings: 41.7,
      },
      {
        country: "Brazil",
        price: 7.99,
        currency: "USD",
        flag: "🇧🇷",
        savings: 33.4,
      },
      {
        country: "Mexico",
        price: 8.99,
        currency: "USD",
        flag: "🇲🇽",
        savings: 25.0,
      },
      {
        country: "United States",
        price: 11.99,
        currency: "USD",
        flag: "🇺🇸",
        savings: 0,
      },
    ],
    image: "/placeholder.svg?height=40&width=40",
    vpnFriendly: true,
  },
  {
    id: 5,
    product: "Apple TV+",
    category: "Video Streaming",
    icon: Monitor,
    brandColor: "from-gray-800 to-black",
    brandColorLight: "bg-gray-50 border-gray-200",
    brandColorDark: "bg-gray-900/50 border-gray-700",
    basePrice: 6.99,
    baseCurrency: "USD",
    baseCountry: "United States",
    tags: ["Video", "VPN Restricted"],
    prices: [
      {
        country: "India",
        price: 0.99,
        currency: "USD",
        flag: "🇮🇳",
        savings: 85.8,
      },
      {
        country: "Turkey",
        price: 1.99,
        currency: "USD",
        flag: "🇹🇷",
        savings: 71.5,
      },
      {
        country: "Argentina",
        price: 2.49,
        currency: "USD",
        flag: "🇦🇷",
        savings: 64.4,
      },
      {
        country: "Brazil",
        price: 2.99,
        currency: "USD",
        flag: "🇧🇷",
        savings: 57.2,
      },
      {
        country: "Mexico",
        price: 3.99,
        currency: "USD",
        flag: "🇲🇽",
        savings: 42.9,
      },
      {
        country: "Philippines",
        price: 4.49,
        currency: "USD",
        flag: "🇵🇭",
        savings: 35.8,
      },
      {
        country: "United Kingdom",
        price: 7.99,
        currency: "USD",
        flag: "🇬🇧",
        savings: -14.3,
      },
      {
        country: "United States",
        price: 6.99,
        currency: "USD",
        flag: "🇺🇸",
        savings: 0,
      },
    ],
    image: "/placeholder.svg?height=40&width=40",
    vpnFriendly: false,
  },
  {
    id: 6,
    product: "Disney+ Premium",
    category: "Video Streaming",
    icon: Play,
    brandColor: "from-blue-600 to-blue-700",
    brandColorLight: "bg-blue-50 border-blue-200",
    brandColorDark: "bg-blue-950/50 border-blue-800",
    basePrice: 10.99,
    baseCurrency: "USD",
    baseCountry: "United States",
    tags: ["Video", "VPN Friendly"],
    prices: [
      {
        country: "Turkey",
        price: 2.99,
        currency: "USD",
        flag: "🇹🇷",
        savings: 72.8,
      },
      {
        country: "India",
        price: 3.99,
        currency: "USD",
        flag: "🇮🇳",
        savings: 63.7,
      },
      {
        country: "Argentina",
        price: 4.99,
        currency: "USD",
        flag: "🇦🇷",
        savings: 54.6,
      },
      {
        country: "Brazil",
        price: 5.99,
        currency: "USD",
        flag: "🇧🇷",
        savings: 45.5,
      },
      {
        country: "Mexico",
        price: 6.99,
        currency: "USD",
        flag: "🇲🇽",
        savings: 36.4,
      },
      {
        country: "Philippines",
        price: 7.99,
        currency: "USD",
        flag: "🇵🇭",
        savings: 27.3,
      },
      {
        country: "United Kingdom",
        price: 12.99,
        currency: "USD",
        flag: "🇬🇧",
        savings: -18.2,
      },
      {
        country: "United States",
        price: 10.99,
        currency: "USD",
        flag: "🇺���8",
        savings: 0,
      },
    ],
    image: "/placeholder.svg?height=40&width=40",
    vpnFriendly: true,
  },
  {
    id: 7,
    product: "Xbox Game Pass Ultimate",
    category: "Gaming",
    icon: Gamepad2,
    brandColor: "from-green-600 to-green-700",
    brandColorLight: "bg-green-50 border-green-200",
    brandColorDark: "bg-green-950/50 border-green-800",
    basePrice: 16.99,
    baseCurrency: "USD",
    baseCountry: "United States",
    tags: ["Gaming", "VPN Restricted"],
    prices: [
      {
        country: "Turkey",
        price: 4.99,
        currency: "USD",
        flag: "🇹🇷",
        savings: 70.6,
      },
      {
        country: "Argentina",
        price: 6.99,
        currency: "USD",
        flag: "🇦🇷",
        savings: 58.9,
      },
      {
        country: "Brazil",
        price: 8.99,
        currency: "USD",
        flag: "🇧🇷",
        savings: 47.1,
      },
      {
        country: "India",
        price: 9.99,
        currency: "USD",
        flag: "🇮🇳",
        savings: 41.2,
      },
      {
        country: "Mexico",
        price: 11.99,
        currency: "USD",
        flag: "🇲🇽",
        savings: 29.4,
      },
      {
        country: "Philippines",
        price: 12.99,
        currency: "USD",
        flag: "🇵🇭",
        savings: 23.5,
      },
      {
        country: "United Kingdom",
        price: 18.99,
        currency: "USD",
        flag: "🇬🇧",
        savings: -11.8,
      },
      {
        country: "United States",
        price: 16.99,
        currency: "USD",
        flag: "🇺���8",
        savings: 0,
      },
    ],
    image: "/placeholder.svg?height=40&width=40",
    vpnFriendly: false,
  },
  {
    id: 8,
    product: "Amazon Prime Video",
    category: "Video Streaming",
    icon: Video,
    brandColor: "from-blue-500 to-blue-600",
    brandColorLight: "bg-blue-50 border-blue-200",
    brandColorDark: "bg-blue-950/50 border-blue-800",
    basePrice: 8.99,
    baseCurrency: "USD",
    baseCountry: "United States",
    tags: ["Video", "VPN Friendly"],
    prices: [
      {
        country: "India",
        price: 1.83,
        currency: "USD",
        flag: "🇮🇳",
        savings: 79.6,
      },
      {
        country: "Turkey",
        price: 2.49,
        currency: "USD",
        flag: "🇹🇷",
        savings: 72.3,
      },
      {
        country: "Argentina",
        price: 3.49,
        currency: "USD",
        flag: "🇦🇷",
        savings: 61.2,
      },
      {
        country: "Brazil",
        price: 4.99,
        currency: "USD",
        flag: "🇧🇷",
        savings: 44.5,
      },
      {
        country: "Mexico",
        price: 5.99,
        currency: "USD",
        flag: "🇲🇽",
        savings: 33.4,
      },
      {
        country: "Philippines",
        price: 6.49,
        currency: "USD",
        flag: "🇵🇭",
        savings: 27.8,
      },
      {
        country: "United Kingdom",
        price: 9.99,
        currency: "USD",
        flag: "🇬🇧",
        savings: -11.1,
      },
      {
        country: "United States",
        price: 8.99,
        currency: "USD",
        flag: "🇺���8",
        savings: 0,
      },
    ],
    image: "/placeholder.svg?height=40&width=40",
    vpnFriendly: true,
  },
];

export default function PriceIndex() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isTagsDropdownOpen, setIsTagsDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState("savings");
  const [priceData] = useState(mockPriceData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Get unique countries for filtering
  const countries = useMemo(() => {
    const allCountries = new Set<string>();
    priceData.forEach((item) => {
      item.prices.forEach((price) => {
        allCountries.add(price.country);
      });
    });
    return ["All", ...Array.from(allCountries).sort()];
  }, [priceData]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    priceData.forEach((item) => {
      item.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [priceData]);

  // Filter and sort data
  const filteredData = useMemo(() => {
    const filtered = priceData.filter((item) => {
      const matchesSearch = item.product
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCountry =
        selectedCountry === "All" ||
        item.prices.some((price) => price.country === selectedCountry);
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => item.tags.includes(tag));
      return matchesSearch && matchesCountry && matchesTags;
    });

    // Sort data
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "product":
          return a.product.localeCompare(b.product);
        case "category":
          return a.category.localeCompare(b.category);
        case "price":
          return a.basePrice - b.basePrice;
        case "savings":
        default:
          const maxSavingsA = Math.max(...a.prices.map((p) => p.savings));
          const maxSavingsB = Math.max(...b.prices.map((p) => p.savings));
          return maxSavingsB - maxSavingsA;
      }
    });

    return filtered;
  }, [priceData, searchTerm, selectedCountry, selectedTags, sortBy]);

  // Function to load data from API
  // const _loadDataFromAPI = async (apiUrl: string) => {
  //   try {
  //     const response = await fetch(apiUrl)
  //     const data = await response.json()
  //     setPriceData(data)
  //   } catch (error) {
  //     console.error("Error loading data from API:", error)
  //   }
  // }
  // const getBestPrice = (prices: any[]) => {
  //   return prices.reduce((best, current) =>
  //     current.price < best.price ? current : best
  //   );
  // };

  const getCountryFlag = (country: string) => {
    const flagMap: { [key: string]: string } = {
      Turkey: "🇹🇷",
      Argentina: "🇦🇷",
      India: "🇮🇳",
      Brazil: "🇧🇷",
      Philippines: "🇵🇭",
      Mexico: "🇲🇽",
      "United Kingdom": "🇬🇧",
      "United States": "🇺���8",
      Ukraine: "🇺🇦",
    };
    return flagMap[country] || "🌍";
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const removeTag = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 p-6 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-green-50 to-blue-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1
                className={`text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Subscription Price Index
              </h1>
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Compare popular subscription prices across countries and save
                with regional pricing
              </p>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`${
                isDarkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : ""
              }`}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              <span className="ml-2">{isDarkMode ? "Light" : "Dark"}</span>
            </Button>
          </div>

          {/* Warning Banner */}
          <Card
            className={`${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-amber-50 border-amber-200"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-amber-500" : "text-amber-900"
                    } mb-1`}
                  >
                    Important Notice
                  </h4>
                  <p
                    className={`${
                      isDarkMode ? "text-amber-300" : "text-amber-800"
                    } text-sm`}
                  >
                    Using VPNs to access regional pricing may violate terms of
                    service. This tool is for price transparency and research
                    purposes. Always check service terms before proceeding.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card
          className={`mb-6 ${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}
        >
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              {/* First Row: Search, Category, Country, Sort */}
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search products and services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Tags Filter */}
                <div className="relative min-w-[200px]">
                  <Button
                    variant="outline"
                    onClick={() => setIsTagsDropdownOpen(!isTagsDropdownOpen)}
                    className={`w-full justify-between ${
                      isDarkMode
                        ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                        : ""
                    }`}
                  >
                    <span>
                      {selectedTags.length === 0
                        ? "Select Tags..."
                        : `${selectedTags.length} tag${
                            selectedTags.length > 1 ? "s" : ""
                          } selected`}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>

                  {isTagsDropdownOpen && (
                    <div
                      className={`absolute top-full left-0 right-0 mt-1 border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto ${
                        isDarkMode
                          ? "bg-gray-800 border-gray-600"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      <div className="p-2">
                        {allTags.map((tag) => (
                          <div
                            key={tag}
                            className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-100 ${
                              isDarkMode ? "hover:bg-gray-700" : ""
                            }`}
                            onClick={() => handleTagToggle(tag)}
                          >
                            <input
                              type="checkbox"
                              checked={selectedTags.includes(tag)}
                              onChange={() => handleTagToggle(tag)}
                              className="rounded"
                            />
                            <span
                              className={`text-sm ${
                                isDarkMode ? "text-gray-200" : "text-gray-800"
                              }`}
                            >
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Country Dropdown */}
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className={`px-3 py-2 border rounded-md text-sm min-w-[180px] ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-600 text-white"
                      : "bg-white border-gray-200 text-gray-900"
                  }`}
                >
                  <option value="All">🌍 All Countries</option>
                  {countries
                    .filter((country) => country !== "All")
                    .map((country) => (
                      <option key={country} value={country}>
                        {getCountryFlag(country)} {country}
                      </option>
                    ))}
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`px-3 py-2 border rounded-md text-sm ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-600 text-white"
                      : "bg-white border-gray-200 text-gray-900"
                  }`}
                >
                  <option value="savings">Sort by Max Savings</option>
                  <option value="product">Sort by Product</option>
                  <option value="category">Sort by Category</option>
                  <option value="price">Sort by Base Price</option>
                </select>
              </div>

              {/* Selected Tags Display */}
              {selectedTags.length > 0 && (
                <div className="flex flex-wrap gap-2 items-center mt-4">
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Selected tags:
                  </span>
                  {selectedTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={`cursor-pointer ${
                        isDarkMode
                          ? "bg-blue-900 text-blue-100 hover:bg-blue-800"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                      }`}
                    >
                      {tag}
                      <X
                        className="w-3 h-3 ml-1"
                        onClick={() => removeTag(tag)}
                      />
                    </Badge>
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllTags}
                    className={`text-xs ${
                      isDarkMode
                        ? "text-gray-400 hover:text-gray-200"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    Clear all
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-4 flex items-center justify-between">
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            {filteredData.length}{" "}
            {filteredData.length === 1 ? "product" : "products"} found
            {selectedCountry !== "All" && (
              <span className="ml-2 text-sm">
                • Showing prices for {getCountryFlag(selectedCountry)}{" "}
                {selectedCountry}
              </span>
            )}
            {selectedTags.length > 0 && (
              <span className="ml-2 text-sm">
                • Filtered by {selectedTags.length} tag
                {selectedTags.length > 1 ? "s" : ""}
              </span>
            )}
          </p>

          {(selectedCountry !== "All" || selectedTags.length > 0) && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCountry("All");
                setSelectedTags([]);
              }}
              className={`${
                isDarkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : ""
              }`}
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Price Comparison Grid - 2 cards per row on large screens */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {filteredData.map((item) => {
            // const bestPrice = getBestPrice(item.prices);
            const maxSavings = Math.max(...item.prices.map((p) => p.savings));

            return (
              <Card
                key={item.id}
                className={`hover:shadow-lg transition-all duration-300 border-2 ${
                  isDarkMode ? item.brandColorDark : item.brandColorLight
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br ${item.brandColor} flex-shrink-0 flex items-center justify-center`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle
                          className={`text-lg ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item.product}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1"></div>
                        {/* Tags Display */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {item.tags.slice(0, 3).map((tag) => {
                            // Define colors for different tag types
                            let tagColors = "";
                            if (tag === "Music") {
                              tagColors = isDarkMode
                                ? "bg-purple-900/50 border-purple-700 text-purple-300"
                                : "bg-purple-100 border-purple-300 text-purple-700";
                            } else if (tag === "Video") {
                              tagColors = isDarkMode
                                ? "bg-blue-900/50 border-blue-700 text-blue-300"
                                : "bg-blue-100 border-blue-300 text-blue-700";
                            } else if (tag === "Gaming") {
                              tagColors = isDarkMode
                                ? "bg-orange-900/50 border-orange-700 text-orange-300"
                                : "bg-orange-100 border-orange-300 text-orange-700";
                            } else if (tag === "VPN Friendly") {
                              tagColors = isDarkMode
                                ? "bg-green-900/50 border-green-700 text-green-300"
                                : "bg-green-100 border-green-300 text-green-700";
                            } else if (tag === "VPN Restricted") {
                              tagColors = isDarkMode
                                ? "bg-red-900/50 border-red-700 text-red-300"
                                : "bg-red-100 border-red-300 text-red-700";
                            } else {
                              tagColors = isDarkMode
                                ? "border-gray-600 text-gray-400"
                                : "border-gray-300 text-gray-600";
                            }

                            return (
                              <Badge
                                key={tag}
                                variant="outline"
                                className={`text-xs ${tagColors}`}
                              >
                                {tag}
                              </Badge>
                            );
                          })}
                          {item.tags.length > 3 && (
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                isDarkMode
                                  ? "border-gray-600 text-gray-400"
                                  : "border-gray-300 text-gray-600"
                              }`}
                            >
                              +{item.tags.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-2 text-2xl font-bold text-green-600">
                        <TrendingDown className="w-5 h-5" />
                        {maxSavings.toFixed(1)}%
                      </div>
                      <p
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        } text-sm`}
                      >
                        Max Savings
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {(selectedCountry === "All"
                      ? item.prices
                      : item.prices.filter((p) => p.country === selectedCountry)
                    ).map((price) => (
                      <div
                        key={price.country}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          (price.savings === maxSavings && maxSavings > 0) ||
                          selectedCountry === price.country
                            ? isDarkMode
                              ? "bg-green-900/30 border border-green-700"
                              : "bg-green-50 border border-green-200"
                            : isDarkMode
                            ? "bg-gray-800/50"
                            : "bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{price.flag}</span>
                          <div>
                            <p
                              className={`font-medium ${
                                isDarkMode ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {price.country}
                            </p>
                            {((price.savings === maxSavings &&
                              maxSavings > 0) ||
                              selectedCountry === price.country) && (
                              <p className="text-xs text-green-600 font-medium">
                                {selectedCountry === price.country
                                  ? "Selected Country"
                                  : "Best Deal"}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-gray-400" />
                            <span
                              className={`text-lg font-semibold ${
                                isDarkMode ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {price.price.toFixed(2)} {price.currency}
                            </span>
                          </div>
                          {price.savings > 0 && (
                            <div className="flex items-center gap-1 text-green-600 text-sm">
                              <Percent className="w-3 h-3" />
                              <span>Save {price.savings.toFixed(1)}%</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div
                      className={`flex items-center justify-between text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <span>Base Price ({item.baseCountry})</span>
                      <span
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        ${item.basePrice.toFixed(2)} {item.baseCurrency}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <Card className="p-12 text-center">
            <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3
              className={`text-lg font-semibold ${
                isDarkMode ? "text-white" : "text-gray-900"
              } mb-2`}
            >
              No products found
            </h3>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Try adjusting your search or filter criteria
            </p>
          </Card>
        )}

        {/* API Integration Note */}
        <Card
          className={`mt-8 ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-blue-50 border-blue-200"
          }`}
        >
          <CardContent className="p-4">
            <h4
              className={`font-semibold ${
                isDarkMode ? "text-blue-400" : "text-blue-900"
              } mb-2`}
            >
              API Integration
            </h4>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-blue-800"
              } text-sm mb-3`}
            >
              To connect your subscription price API, update the{" "}
              <code
                className={`${
                  isDarkMode
                    ? "bg-gray-700 text-blue-400"
                    : "bg-blue-100 text-blue-900"
                } px-1 rounded`}
              >
                loadDataFromAPI
              </code>{" "}
              function for real-time pricing data across all services.
            </p>
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-blue-700"
              } text-xs`}
            >
              Expected JSON structure: Array of objects with id, product,
              category, basePrice, baseCurrency, baseCountry, tags array, prices
              array (country, price, currency, flag, savings), image, and
              vpnFriendly fields.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
