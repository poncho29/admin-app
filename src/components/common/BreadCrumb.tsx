import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { RiArrowRightSLine } from 'react-icons/ri';

export const BreadCrumb = () => {
  const location = useLocation();

  const [crumbs, setCrumbs] = useState<ReactNode[]>([]);

  useEffect(() => {
    const breadCrumbs = createCrumbs(location.pathname);

    setCrumbs(breadCrumbs);
  }, [location]);

  const createCrumbs = (path: string) => {
    let currentPath = '';
    const pathnames = path.split('/');

    const breadCrumbs = pathnames
      .filter(crumb => crumb !== '')
      .map((crumb, i) => {
        currentPath += `/${crumb}`;

        return (
          <div
            key={crumb}
            className="flex items-center font-medium capitalize"
          >
            <Link to={currentPath}>{crumb}</Link>
            {(i + 1 < pathnames.length - 1) && (
              <RiArrowRightSLine size={24} />
            )}
          </div>
        );
      });

    return breadCrumbs;
  }

  return (
    <div className="w-full max-w-[300px] flex gap-1">
      {crumbs.map(crumb => crumb)}
    </div>
  );
};
