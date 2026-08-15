export interface User {
    userName: string;
    id: string;
    password: string;
    storageUsed: number;
    storageLimit: number;
    createdAt: Date;
}

export interface JwtPayload {
 
  id: string;  
  userName: string;
  storageUsed: number;
  storageLimit: number;

}
