import { SmartAccountClient } from 'permissionless';

// Smart Account Client type - using the actual type from permissionless
export type SmartAccountClientType = SmartAccountClient;

// Bucket interface based on the existing definitions
export interface Bucket {
  id: string;
  name: string;
  balance: string;
  monthlyLimit: string;
  monthlySpent: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  tokenBalances: Array<{
    balance: string;
    token: {
      name: string;
      symbol: string;
      decimals: number;
    };
  }>;
}

// User Bucket interface for components that need a simplified version
export interface UserBucket {
  name: string;
  balance: string;
  monthlyLimit: string;
  monthlySpent: string;
  active: boolean;
} 