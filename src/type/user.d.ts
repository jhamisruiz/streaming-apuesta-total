declare module User {
    interface Profile {
        uid: string;
        name: string;
        avatar?: string;
    }

    interface Login {
        username?: string;
        islogin?: string | boolean;
    }
}
