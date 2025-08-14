declare module 'jsvectormap' {
    interface VectorMapOptions {
        map?: string;
        backgroundColor?: string;
        regionStyle?: {
            initial?: Record<string, unknown>;
            hover?: Record<string, unknown>;
            selected?: Record<string, unknown>;
        };
        markerStyle?: {
            initial?: Record<string, unknown>;
            hover?: Record<string, unknown>;
            selected?: Record<string, unknown>;
        };
        markers?: Array<{
            coords: [number, number];
            name?: string;
            [key: string]: unknown;
        }>;
        series?: {
            regions?: Array<{
                values: Record<string, number>;
                scale?: string[];
                normalizeFunction?: string;
                min?: number;
                max?: number;
            }>;
            markers?: Array<{
                values: Record<string, number>;
                scale?: string[];
                normalizeFunction?: string;
                min?: number;
                max?: number;
            }>;
        };
        focusOn?: {
            regions?: string[];
            coords?: [number, number];
            scale?: number;
            animate?: boolean;
        };
        labels?: {
            regions?: {
                render?: (code: string) => string;
                offsets?: (code: string) => [number, number];
            };
            markers?: {
                render?: (marker: unknown) => string;
                offsets?: (marker: unknown) => [number, number];
            };
        };
        onRegionTooltipShow?: (event: Event, tooltip: HTMLElement, code: string) => void;
        onRegionClick?: (event: Event, code: string) => void;
        onMarkerTooltipShow?: (event: Event, tooltip: HTMLElement, index: number) => void;
        onMarkerClick?: (event: Event, index: number) => void;
        [key: string]: unknown;
    }
    
    class JsVectorMap {
        constructor(options: VectorMapOptions & { selector: string | HTMLElement });
        addMarkers(markers: Array<{ coords: [number, number]; name?: string; [key: string]: unknown }>): void;
        removeMarkers(indices: number[]): void;
        getSelectedRegions(): string[];
        clearSelectedRegions(): void;
        destroy(): void;
        [key: string]: unknown;
    }
    
    export default JsVectorMap;
}
