'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';

export default function DeleteBitTreeButton({ handle }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete /${handle}? This action cannot be undone.`)) {
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch('/api/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ handle }),
      });

      const result = await response.json();

      if (result.success) {
        window.alert(`✓ ${result.message}`);
        router.refresh();
      } else {
        window.alert(`✗ ${result.message}`);
      }
    } catch (error) {
      window.alert('✗ Failed to delete BitTree');
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-400/30 hover:border-red-400/50 rounded-lg text-red-300 hover:text-red-200 text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Trash2 size={16} />
    </button>
  );
}
