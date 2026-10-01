export function trackEvent(
  name: string,
  properties?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && window.location.hostname === "localhost") {
    console.debug(`[Analytics] ${name}`, properties || "");
  }
}

export function trackCTAClick(
  location: string,
  variant: "primary" | "secondary" = "primary"
): void {
  trackEvent("cta_click", { location, variant });
}

export function trackFormSubmit(formName: string): void {
  trackEvent("form_submit", { form: formName });
}

export function trackPageView(path: string): void {
  trackEvent("page_view", { path });
}
