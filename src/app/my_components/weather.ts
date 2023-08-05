export interface Weather {
    location: {
        name: String;
    };
    current: {
        temp_f : number;
        humidity: number;
        feelslike_f: number
        condition : {
            icon: string;
            text: string;
        };
        
    };

}