/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MarkdownContent, MarkdownHeading, SiteStructureItem, } from "./global/definitions";
export namespace Components {
    interface AnchorLink {
        "to": string;
    }
    interface AppBurger {
    }
    interface AppIcon {
        "name": string;
    }
    interface AppMarked {
        "fetchPath"?: string;
        "renderer"?: (doc: MarkdownContent) => any;
    }
    interface AvcCodeType {
        "typeId": string;
    }
    interface BlogPage {
    }
    interface BlogPost {
        "slug": string;
    }
    interface CapacitorCommunity {
    }
    interface CapacitorEnterprise {
    }
    interface CapacitorSite {
    }
    interface CapacitorSiteFooter {
    }
    interface CapacitorSiteHeader {
    }
    interface CapacitorSiteRoutes {
    }
    interface CodeSnippet {
        "code": string;
        "language": string;
    }
    interface ContributorList {
        "contributors": string[];
        "link": (contributor: string) => string;
    }
    interface DocSnippet {
    }
    interface DocsMenu {
        "selectedParent": SiteStructureItem;
        "siteStructureList": SiteStructureItem[];
    }
    interface DocumentComponent {
        "page": string;
        "pages": string[];
    }
    interface InPageNavigation {
        "currentPageUrl": string;
        "pageLinks": MarkdownHeading[];
        "srcUrl": string;
    }
    interface LandingPage {
    }
    interface LowerContentNav {
        "next"?: SiteStructureItem;
        "prev"?: SiteStructureItem;
    }
    interface NewsletterSignup {
    }
    interface PluginApi {
        "index": boolean;
        "name": string;
    }
    interface PluginPlatforms {
        "platforms": string;
    }
    interface PreFooter {
    }
}
declare global {
    interface HTMLAnchorLinkElement extends Components.AnchorLink, HTMLStencilElement {
    }
    var HTMLAnchorLinkElement: {
        prototype: HTMLAnchorLinkElement;
        new (): HTMLAnchorLinkElement;
    };
    interface HTMLAppBurgerElement extends Components.AppBurger, HTMLStencilElement {
    }
    var HTMLAppBurgerElement: {
        prototype: HTMLAppBurgerElement;
        new (): HTMLAppBurgerElement;
    };
    interface HTMLAppIconElement extends Components.AppIcon, HTMLStencilElement {
    }
    var HTMLAppIconElement: {
        prototype: HTMLAppIconElement;
        new (): HTMLAppIconElement;
    };
    interface HTMLAppMarkedElement extends Components.AppMarked, HTMLStencilElement {
    }
    var HTMLAppMarkedElement: {
        prototype: HTMLAppMarkedElement;
        new (): HTMLAppMarkedElement;
    };
    interface HTMLAvcCodeTypeElement extends Components.AvcCodeType, HTMLStencilElement {
    }
    var HTMLAvcCodeTypeElement: {
        prototype: HTMLAvcCodeTypeElement;
        new (): HTMLAvcCodeTypeElement;
    };
    interface HTMLBlogPageElement extends Components.BlogPage, HTMLStencilElement {
    }
    var HTMLBlogPageElement: {
        prototype: HTMLBlogPageElement;
        new (): HTMLBlogPageElement;
    };
    interface HTMLBlogPostElement extends Components.BlogPost, HTMLStencilElement {
    }
    var HTMLBlogPostElement: {
        prototype: HTMLBlogPostElement;
        new (): HTMLBlogPostElement;
    };
    interface HTMLCapacitorCommunityElement extends Components.CapacitorCommunity, HTMLStencilElement {
    }
    var HTMLCapacitorCommunityElement: {
        prototype: HTMLCapacitorCommunityElement;
        new (): HTMLCapacitorCommunityElement;
    };
    interface HTMLCapacitorEnterpriseElement extends Components.CapacitorEnterprise, HTMLStencilElement {
    }
    var HTMLCapacitorEnterpriseElement: {
        prototype: HTMLCapacitorEnterpriseElement;
        new (): HTMLCapacitorEnterpriseElement;
    };
    interface HTMLCapacitorSiteElement extends Components.CapacitorSite, HTMLStencilElement {
    }
    var HTMLCapacitorSiteElement: {
        prototype: HTMLCapacitorSiteElement;
        new (): HTMLCapacitorSiteElement;
    };
    interface HTMLCapacitorSiteFooterElement extends Components.CapacitorSiteFooter, HTMLStencilElement {
    }
    var HTMLCapacitorSiteFooterElement: {
        prototype: HTMLCapacitorSiteFooterElement;
        new (): HTMLCapacitorSiteFooterElement;
    };
    interface HTMLCapacitorSiteHeaderElement extends Components.CapacitorSiteHeader, HTMLStencilElement {
    }
    var HTMLCapacitorSiteHeaderElement: {
        prototype: HTMLCapacitorSiteHeaderElement;
        new (): HTMLCapacitorSiteHeaderElement;
    };
    interface HTMLCapacitorSiteRoutesElement extends Components.CapacitorSiteRoutes, HTMLStencilElement {
    }
    var HTMLCapacitorSiteRoutesElement: {
        prototype: HTMLCapacitorSiteRoutesElement;
        new (): HTMLCapacitorSiteRoutesElement;
    };
    interface HTMLCodeSnippetElement extends Components.CodeSnippet, HTMLStencilElement {
    }
    var HTMLCodeSnippetElement: {
        prototype: HTMLCodeSnippetElement;
        new (): HTMLCodeSnippetElement;
    };
    interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {
    }
    var HTMLContributorListElement: {
        prototype: HTMLContributorListElement;
        new (): HTMLContributorListElement;
    };
    interface HTMLDocSnippetElement extends Components.DocSnippet, HTMLStencilElement {
    }
    var HTMLDocSnippetElement: {
        prototype: HTMLDocSnippetElement;
        new (): HTMLDocSnippetElement;
    };
    interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {
    }
    var HTMLDocsMenuElement: {
        prototype: HTMLDocsMenuElement;
        new (): HTMLDocsMenuElement;
    };
    interface HTMLDocumentComponentElement extends Components.DocumentComponent, HTMLStencilElement {
    }
    var HTMLDocumentComponentElement: {
        prototype: HTMLDocumentComponentElement;
        new (): HTMLDocumentComponentElement;
    };
    interface HTMLInPageNavigationElement extends Components.InPageNavigation, HTMLStencilElement {
    }
    var HTMLInPageNavigationElement: {
        prototype: HTMLInPageNavigationElement;
        new (): HTMLInPageNavigationElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLLowerContentNavElement extends Components.LowerContentNav, HTMLStencilElement {
    }
    var HTMLLowerContentNavElement: {
        prototype: HTMLLowerContentNavElement;
        new (): HTMLLowerContentNavElement;
    };
    interface HTMLNewsletterSignupElement extends Components.NewsletterSignup, HTMLStencilElement {
    }
    var HTMLNewsletterSignupElement: {
        prototype: HTMLNewsletterSignupElement;
        new (): HTMLNewsletterSignupElement;
    };
    interface HTMLPluginApiElement extends Components.PluginApi, HTMLStencilElement {
    }
    var HTMLPluginApiElement: {
        prototype: HTMLPluginApiElement;
        new (): HTMLPluginApiElement;
    };
    interface HTMLPluginPlatformsElement extends Components.PluginPlatforms, HTMLStencilElement {
    }
    var HTMLPluginPlatformsElement: {
        prototype: HTMLPluginPlatformsElement;
        new (): HTMLPluginPlatformsElement;
    };
    interface HTMLPreFooterElement extends Components.PreFooter, HTMLStencilElement {
    }
    var HTMLPreFooterElement: {
        prototype: HTMLPreFooterElement;
        new (): HTMLPreFooterElement;
    };
    interface HTMLElementTagNameMap {
        "anchor-link": HTMLAnchorLinkElement;
        "app-burger": HTMLAppBurgerElement;
        "app-icon": HTMLAppIconElement;
        "app-marked": HTMLAppMarkedElement;
        "avc-code-type": HTMLAvcCodeTypeElement;
        "blog-page": HTMLBlogPageElement;
        "blog-post": HTMLBlogPostElement;
        "capacitor-community": HTMLCapacitorCommunityElement;
        "capacitor-enterprise": HTMLCapacitorEnterpriseElement;
        "capacitor-site": HTMLCapacitorSiteElement;
        "capacitor-site-footer": HTMLCapacitorSiteFooterElement;
        "capacitor-site-header": HTMLCapacitorSiteHeaderElement;
        "capacitor-site-routes": HTMLCapacitorSiteRoutesElement;
        "code-snippet": HTMLCodeSnippetElement;
        "contributor-list": HTMLContributorListElement;
        "doc-snippet": HTMLDocSnippetElement;
        "docs-menu": HTMLDocsMenuElement;
        "document-component": HTMLDocumentComponentElement;
        "in-page-navigation": HTMLInPageNavigationElement;
        "landing-page": HTMLLandingPageElement;
        "lower-content-nav": HTMLLowerContentNavElement;
        "newsletter-signup": HTMLNewsletterSignupElement;
        "plugin-api": HTMLPluginApiElement;
        "plugin-platforms": HTMLPluginPlatformsElement;
        "pre-footer": HTMLPreFooterElement;
    }
}
declare namespace LocalJSX {
    interface AnchorLink {
        "to"?: string;
    }
    interface AppBurger {
        "onBurgerClick"?: (event: CustomEvent<any>) => void;
    }
    interface AppIcon {
        "name"?: string;
    }
    interface AppMarked {
        "fetchPath"?: string;
        "renderer"?: (doc: MarkdownContent) => any;
    }
    interface AvcCodeType {
        "typeId"?: string;
    }
    interface BlogPage {
    }
    interface BlogPost {
        "slug"?: string;
    }
    interface CapacitorCommunity {
    }
    interface CapacitorEnterprise {
    }
    interface CapacitorSite {
    }
    interface CapacitorSiteFooter {
    }
    interface CapacitorSiteHeader {
    }
    interface CapacitorSiteRoutes {
    }
    interface CodeSnippet {
        "code"?: string;
        "language"?: string;
    }
    interface ContributorList {
        "contributors"?: string[];
        "link"?: (contributor: string) => string;
    }
    interface DocSnippet {
    }
    interface DocsMenu {
        "selectedParent"?: SiteStructureItem;
        "siteStructureList"?: SiteStructureItem[];
    }
    interface DocumentComponent {
        "page"?: string;
        "pages"?: string[];
    }
    interface InPageNavigation {
        "currentPageUrl"?: string;
        "pageLinks"?: MarkdownHeading[];
        "srcUrl"?: string;
    }
    interface LandingPage {
    }
    interface LowerContentNav {
        "next"?: SiteStructureItem;
        "prev"?: SiteStructureItem;
    }
    interface NewsletterSignup {
    }
    interface PluginApi {
        "index"?: boolean;
        "name"?: string;
    }
    interface PluginPlatforms {
        "platforms"?: string;
    }
    interface PreFooter {
    }
    interface IntrinsicElements {
        "anchor-link": AnchorLink;
        "app-burger": AppBurger;
        "app-icon": AppIcon;
        "app-marked": AppMarked;
        "avc-code-type": AvcCodeType;
        "blog-page": BlogPage;
        "blog-post": BlogPost;
        "capacitor-community": CapacitorCommunity;
        "capacitor-enterprise": CapacitorEnterprise;
        "capacitor-site": CapacitorSite;
        "capacitor-site-footer": CapacitorSiteFooter;
        "capacitor-site-header": CapacitorSiteHeader;
        "capacitor-site-routes": CapacitorSiteRoutes;
        "code-snippet": CodeSnippet;
        "contributor-list": ContributorList;
        "doc-snippet": DocSnippet;
        "docs-menu": DocsMenu;
        "document-component": DocumentComponent;
        "in-page-navigation": InPageNavigation;
        "landing-page": LandingPage;
        "lower-content-nav": LowerContentNav;
        "newsletter-signup": NewsletterSignup;
        "plugin-api": PluginApi;
        "plugin-platforms": PluginPlatforms;
        "pre-footer": PreFooter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "anchor-link": LocalJSX.AnchorLink & JSXBase.HTMLAttributes<HTMLAnchorLinkElement>;
            "app-burger": LocalJSX.AppBurger & JSXBase.HTMLAttributes<HTMLAppBurgerElement>;
            "app-icon": LocalJSX.AppIcon & JSXBase.HTMLAttributes<HTMLAppIconElement>;
            "app-marked": LocalJSX.AppMarked & JSXBase.HTMLAttributes<HTMLAppMarkedElement>;
            "avc-code-type": LocalJSX.AvcCodeType & JSXBase.HTMLAttributes<HTMLAvcCodeTypeElement>;
            "blog-page": LocalJSX.BlogPage & JSXBase.HTMLAttributes<HTMLBlogPageElement>;
            "blog-post": LocalJSX.BlogPost & JSXBase.HTMLAttributes<HTMLBlogPostElement>;
            "capacitor-community": LocalJSX.CapacitorCommunity & JSXBase.HTMLAttributes<HTMLCapacitorCommunityElement>;
            "capacitor-enterprise": LocalJSX.CapacitorEnterprise & JSXBase.HTMLAttributes<HTMLCapacitorEnterpriseElement>;
            "capacitor-site": LocalJSX.CapacitorSite & JSXBase.HTMLAttributes<HTMLCapacitorSiteElement>;
            "capacitor-site-footer": LocalJSX.CapacitorSiteFooter & JSXBase.HTMLAttributes<HTMLCapacitorSiteFooterElement>;
            "capacitor-site-header": LocalJSX.CapacitorSiteHeader & JSXBase.HTMLAttributes<HTMLCapacitorSiteHeaderElement>;
            "capacitor-site-routes": LocalJSX.CapacitorSiteRoutes & JSXBase.HTMLAttributes<HTMLCapacitorSiteRoutesElement>;
            "code-snippet": LocalJSX.CodeSnippet & JSXBase.HTMLAttributes<HTMLCodeSnippetElement>;
            "contributor-list": LocalJSX.ContributorList & JSXBase.HTMLAttributes<HTMLContributorListElement>;
            "doc-snippet": LocalJSX.DocSnippet & JSXBase.HTMLAttributes<HTMLDocSnippetElement>;
            "docs-menu": LocalJSX.DocsMenu & JSXBase.HTMLAttributes<HTMLDocsMenuElement>;
            "document-component": LocalJSX.DocumentComponent & JSXBase.HTMLAttributes<HTMLDocumentComponentElement>;
            "in-page-navigation": LocalJSX.InPageNavigation & JSXBase.HTMLAttributes<HTMLInPageNavigationElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "lower-content-nav": LocalJSX.LowerContentNav & JSXBase.HTMLAttributes<HTMLLowerContentNavElement>;
            "newsletter-signup": LocalJSX.NewsletterSignup & JSXBase.HTMLAttributes<HTMLNewsletterSignupElement>;
            "plugin-api": LocalJSX.PluginApi & JSXBase.HTMLAttributes<HTMLPluginApiElement>;
            "plugin-platforms": LocalJSX.PluginPlatforms & JSXBase.HTMLAttributes<HTMLPluginPlatformsElement>;
            "pre-footer": LocalJSX.PreFooter & JSXBase.HTMLAttributes<HTMLPreFooterElement>;
        }
    }
}
