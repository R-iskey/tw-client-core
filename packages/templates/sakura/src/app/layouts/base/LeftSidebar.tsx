import { Icon } from '@tw/ui/components/icon';

interface LeftSidebarProps {
  items: Array<{
    path: string;
    icon: string;
    name: string;
  }>;
}

export const LeftSidebar = ({ items }: LeftSidebarProps) => {
  const renderSidebarContent = (
    <div className="flex-none self-start w-[260px] bg-primary bg-white dark:bg-background xl:dark:bg-white/15 dark:text-white rounded-[30px] p-[10px] shadow-lg max-h-[calc((100vh-150px)/2)] overflow-y-auto lg:max-h-none">
      {items.map((item) => (
        <div key={item.name} className="mb-2">
          <div className="flex items-center justify-between p-2 hover:bg-black/10 dark:hover:bg-white/15 transition-colors rounded-[30px] cursor-pointer">
            <div className="flex items-center">
              <a href={item.path} className="text-sm 2xl:text-base flex items-center justify-start">
                <span className="mr-2 text-black dark:text-white">
                  <Icon name={item.icon} />
                </span>
                {item.name}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return renderSidebarContent;
};
