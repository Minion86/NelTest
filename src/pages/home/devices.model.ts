export class DevicesModel {
    id: string;
    location: string;
    mac_address: string;
    connected: string;
    parent_location: string;
    updated_at: string;
    signal: string;
}

export class SortModel {
    ascending: boolean;
    descending: boolean;
    direction: string;
    property: string;
}


export class DevicesSearchModel {
    first: boolean;
    last: boolean;
    total_pages: number;
    total_elements: number;
    number_of_elements: number;
    size: number;
    content: Array<DevicesModel> = [];
    sort: Array<SortModel> = [];
}


