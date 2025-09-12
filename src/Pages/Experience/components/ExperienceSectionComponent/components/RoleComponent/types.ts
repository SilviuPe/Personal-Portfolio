interface RoleComponentPropsI {
    title: string;
    schedule: string;
    timestamp: {
        dateStart: Date;
        dateEnd: Date;
    };
    description: string;
}

interface timestampTextStateI {
    start: string;
    end: string;
}

export type { RoleComponentPropsI, timestampTextStateI };