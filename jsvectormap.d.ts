declare module 'jsvectormap' {
    interface JsVectorMapOptions {
        map: string;
        backgroundColor?: string;
        zoomOnScroll?: boolean;
        regionsSelectable?: boolean;
        regionsSelectableOne?: boolean;
        markersSelectable?: boolean;
        markersSelectableOne?: boolean;
        regionStyle?: {
            initial?: {
                fill?: string;
                'fill-opacity'?: number;
                stroke?: string;
                'stroke-width'?: number;
                'stroke-opacity'?: number;
            };
            hover?: {
                fill?: string;
                'fill-opacity'?: number;
                cursor?: string;
            };
            selected?: {
                fill?: string;
            };
            selectedHover?: {
                fill?: string;
            };
        };
        markerStyle?: {
            initial?: {
                fill?: string;
                stroke?: string;
                'stroke-width'?: number;
                'stroke-opacity'?: number;
                r?: number;
            };
            hover?: {
                fill?: string;
                stroke?: string;
                'stroke-width'?: number;
                'stroke-opacity'?: number;
                r?: number;
                cursor?: string;
            };
        };
        markers?: Array<{
            name: string;
            coords: [number, number];
            style?: {
                fill?: string;
                stroke?: string;
                'stroke-width'?: number;
                'stroke-opacity'?: number;
                r?: number;
            };
        }>;
        series?: {
            regions?: Array<{
                values: Record<string, number>;
                scale?: [string, string];
                normalizeFunction?: string;
                min?: number;
                max?: number;
            }>;
        };
        onRegionSelected?: (e: Event, code: string, isSelected: boolean, selectedRegions: string[]) => void;
        onMarkerSelected?: (e: Event, index: number, isSelected: boolean) => void;
        onRegionTipShow?: (e: Event, tip: HTMLElement, code: string) => void;
        onMarkerTipShow?: (e: Event, tip: HTMLElement, index: number) => void;
    }

    interface JsVectorMap {
        new (element: HTMLElement, options: JsVectorMapOptions): JsVectorMap;
        setSelectedRegions(regions: string[]): void;
        setSelectedMarkers(markers: number[]): void;
        getSelectedRegions(): string[];
        getSelectedMarkers(): number[];
        setMapObject(mapObject: unknown): void;
        getMapObject(): unknown;
        addMarkers(markers: Array<{ name: string; coords: [number, number] }>): void;
        removeMarkers(markers: number[]): void;
        removeAllMarkers(): void;
        setSeries(series: unknown): void;
        getSeries(): unknown;
        setFocus(scale: number, lat: number, lng: number): void;
        setFocus(scale: number, region: string): void;
        setFocus(scale: number, x: number, y: number): void;
        getMapObject(): unknown;
        destroy(): void;
    }

    const jsVectorMap: JsVectorMap;
    export default jsVectorMap;
}
