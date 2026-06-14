export interface WikiApiResponse {
    query: {
        pages: {
            revisions: {
                slots: {
                    main: {
                        content: string;
                    };
                };
            }[];
        }[];
    };
}