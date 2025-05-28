import React from 'react'
import { UserTopLevelItem } from '@/lib/api/user-items'
import { FiFolder, FiLink, FiGlobe, FiLock } from 'react-icons/fi'

interface ItemCardProps {
  item: UserTopLevelItem
  onClick?: () => void
}

export default function ItemCard({ item, onClick }: ItemCardProps) {
  const isFolder = item.type === 'folder'
  
  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          {isFolder ? (
            <FiFolder className="text-blue-500 text-lg" />
          ) : (
            <FiLink className="text-green-500 text-lg" />
          )}
          <h3 className="font-semibold text-gray-900 line-clamp-1">
            {item.title}
          </h3>
        </div>
        
        {isFolder && (
          <div className="flex items-center gap-1">
            {item.is_roadmap && (
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                로드맵
              </span>
            )}
            {item.is_public ? (
              <FiGlobe className="text-gray-400 text-sm" title="공개" />
            ) : (
              <FiLock className="text-gray-400 text-sm" title="비공개" />
            )}
          </div>
        )}
      </div>
      
      {item.description && (
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
      )}
      
      {!isFolder && item.url && (
        <p className="text-blue-500 text-xs truncate mb-2">
          {item.url}
        </p>
      )}
      
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>{isFolder ? '폴더' : '링크'}</span>
        {item.created_at && (
          <span>
            {new Date(item.created_at).toLocaleDateString('ko-KR')}
          </span>
        )}
      </div>
    </div>
  )
}
