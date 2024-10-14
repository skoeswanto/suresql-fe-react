import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Database } from 'lucide-react';

// Mock data for instances
const mockInstances = [
  { id: 1, name: 'Production DB', size: '1GB', status: 'Running' },
  { id: 2, name: 'Development DB', size: '500MB', status: 'Stopped' },
  { id: 3, name: 'Test DB', size: '250MB', status: 'Running' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="mb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
          <PlusCircle className="mr-2" />
          Create New Instance
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockInstances.map((instance) => (
              <tr key={instance.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Database className="flex-shrink-0 h-6 w-6 text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">{instance.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{instance.size}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    instance.status === 'Running' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {instance.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link to={`/instance/${instance.id}`} className="text-blue-600 hover:text-blue-900 mr-4">View</Link>
                  <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;