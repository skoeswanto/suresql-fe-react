import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Database, Server, Shield, Download, Upload, Play } from 'lucide-react';

// Mock data for instance details
const mockInstanceDetails = {
  id: 1,
  name: 'Production DB',
  size: '1GB',
  status: 'Running',
  hostname: 'prod-db.suresql.com',
  spec: 'High Performance',
  redundancy: 'Multi-region',
  backupServer: 'backup-prod-db.suresql.com',
  apiKey: 'sk_live_1234567890abcdef',
  apiSecret: '••••••••••••••••',
};

const InstanceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');

  // In a real application, you would fetch the instance details based on the ID
  const instance = mockInstanceDetails;

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Instance: {instance.name}</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              className={`${
                activeTab === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`${
                activeTab === 'browser' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab('browser')}
            >
              Database Browser
            </button>
          </nav>
        </div>
        <div className="p-6">
          {activeTab === 'overview' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Instance Details</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center"><Database className="mr-2" /> Size: {instance.size}</li>
                    <li className="flex items-center"><Server className="mr-2" /> Spec: {instance.spec}</li>
                    <li className="flex items-center"><Shield className="mr-2" /> Redundancy: {instance.redundancy}</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Connection Info</h2>
                  <ul className="space-y-2">
                    <li>Hostname: {instance.hostname}</li>
                    <li>Backup Server: {instance.backupServer}</li>
                    <li>API Key: {instance.apiKey}</li>
                    <li>API Secret: {instance.apiSecret}</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Actions</h2>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
                    <Download className="mr-2" /> Export Schema
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center">
                    <Upload className="mr-2" /> Import Data
                  </button>
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded flex items-center">
                    <Play className="mr-2" /> Run Query
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'browser' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Database Browser</h2>
              <p>Here you would implement the database browser functionality, including:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Table list</li>
                <li>Table structure viewer</li>
                <li>Data viewer with pagination</li>
                <li>Query executor</li>
                <li>Export/Import functionality</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstanceDetail;