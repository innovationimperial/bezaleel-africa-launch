
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Users, Eye, MousePointer, Clock, TrendingUp, Globe, Smartphone, Monitor } from "lucide-react";

const Admin = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading analytics data
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Mock analytics data - replace with real GA4 data
  const analyticsData = {
    overview: {
      totalUsers: 12458,
      sessions: 18942,
      pageViews: 34576,
      bounceRate: 42.3,
      avgSessionDuration: "2m 34s"
    },
    pageViews: [
      { date: "Jan", views: 4000 },
      { date: "Feb", views: 3000 },
      { date: "Mar", views: 5000 },
      { date: "Apr", views: 4500 },
      { date: "May", views: 6000 },
      { date: "Jun", views: 5500 }
    ],
    topPages: [
      { page: "/", views: 8945, percentage: 25.9 },
      { page: "/services", views: 6234, percentage: 18.0 },
      { page: "/registration", views: 4567, percentage: 13.2 },
      { page: "/registration/south-africa", views: 3891, percentage: 11.3 },
      { page: "/registration/zambia", views: 2876, percentage: 8.3 }
    ],
    deviceTypes: [
      { name: "Desktop", value: 45, color: "#0088FE" },
      { name: "Mobile", value: 35, color: "#00C49F" },
      { name: "Tablet", value: 20, color: "#FFBB28" }
    ],
    countries: [
      { country: "South Africa", users: 6845, percentage: 55 },
      { country: "Zambia", users: 3234, percentage: 26 },
      { country: "United States", users: 1245, percentage: 10 },
      { country: "United Kingdom", users: 634, percentage: 5 },
      { country: "Others", users: 500, percentage: 4 }
    ]
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading analytics data...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Monitor your website performance and user engagement</p>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.overview.totalUsers.toLocaleString()}</div>
                <Badge variant="secondary" className="mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5%
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sessions</CardTitle>
                <MousePointer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.overview.sessions.toLocaleString()}</div>
                <Badge variant="secondary" className="mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.3%
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.overview.pageViews.toLocaleString()}</div>
                <Badge variant="secondary" className="mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15.7%
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.overview.bounceRate}%</div>
                <Badge variant="outline" className="mt-1">
                  -2.1%
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.overview.avgSessionDuration}</div>
                <Badge variant="secondary" className="mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +5.2%
                </Badge>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="pages">Top Pages</TabsTrigger>
              <TabsTrigger value="audience">Audience</TabsTrigger>
              <TabsTrigger value="setup">GA4 Setup</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Page Views Over Time</CardTitle>
                  <CardDescription>Monthly page view trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={analyticsData.pageViews}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="views" stroke="#db1f48" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pages" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Pages</CardTitle>
                  <CardDescription>Most visited pages on your website</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analyticsData.topPages.map((page, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{page.page}</p>
                          <p className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</p>
                        </div>
                        <Badge>{page.percentage}%</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="audience" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Device Types</CardTitle>
                    <CardDescription>User device breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={analyticsData.deviceTypes}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {analyticsData.deviceTypes.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Countries</CardTitle>
                    <CardDescription>Users by country</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analyticsData.countries.map((country, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{country.country}</span>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{country.users.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground">{country.percentage}%</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="setup" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Google Analytics 4 Setup</CardTitle>
                  <CardDescription>Configure GA4 and Google Tag Manager for comprehensive tracking</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">1. Google Analytics 4 (GA4)</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Free analytics platform that tracks page views, user sessions, bounce rates, and interaction events.
                      </p>
                      <div className="bg-muted p-3 rounded text-sm font-mono">
                        {`<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>`}
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">2. Google Tag Manager (GTM)</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Manages tracking codes and makes it easier to track specific interactions without editing code.
                      </p>
                      <div className="bg-muted p-3 rounded text-sm font-mono">
                        {`<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->`}
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">3. Event Tracking Setup</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Track specific interactions like button clicks, form submissions, and downloads.
                      </p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Button clicks (CTA, navigation)</li>
                        <li>• Form submissions (contact, registration)</li>
                        <li>• File downloads (brochures, documents)</li>
                        <li>• Scroll depth tracking</li>
                        <li>• Video engagement</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild>
                      <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">
                        Open GA4 Dashboard
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://tagmanager.google.com" target="_blank" rel="noopener noreferrer">
                        Open GTM
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
