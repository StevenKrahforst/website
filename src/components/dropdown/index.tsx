import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import classNames from 'classnames';

import './style.scss';

const Dropdown: React.FunctionComponent<DropdownProps> = (props): React.ReactElement => {

  const ref: MutableRefObject<HTMLDivElement> = useRef<any>();

  const [ selected, setSelected ] = useState<string>(props.selected ?? Object.keys(props.items)[0]);
  const [ expanded, setExpanded ] = useState<boolean>(false);

  useEffect((): (() => void) => {

    const listener = (event: MouseEvent): void => {
      if(ref.current !== null && !ref.current.contains(event.target as any)){
        setExpanded(false);
      }
    };

    window.addEventListener('click', listener);

    return (): void => window.removeEventListener('click', listener);

  }, []);

  return (
    <div ref={ref} className={classNames('dropdown', { 'expanded': expanded }, props.className)}>
      <div className="dropdown-button" onClick={() => setExpanded(!expanded)}>
          { props.items[selected].icon !== null && <img className="dropdown-icon" src={props.items[selected].icon} /> }
          { props.items[selected].label }
      </div>
      <AnimatePresence>
        { expanded && <motion.div
          key="dropdown"
          exit={{ opacity: 0, transition: { duration: .15 } }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: .25 } }}
        >
          <div className="dropdown-list">
            { Object.keys(props.items).map((id: string): React.ReactElement => (
              <div className="dropdown-list-item" key={id} onClick={(): void => {
                if(typeof props.onSelect === 'function') {
                  props.onSelect(id);
                }
                setSelected(id);
                setExpanded(false);
              }}>
                { props.items[id].icon !== null && <img className="dropdown-icon" src={props.items[id].icon} /> }
                { props.items[id].label }
              </div>
            )) }
          </div>
        </motion.div> }
      </AnimatePresence>
    </div>
  );

}

export interface DropdownItem {

  label: string
  icon: string

}

export interface DropdownProps {

  items: Record<string, DropdownItem>
  onSelect?: (id: string) => void

  selected?: string

  // Default
  className?: string

}

export default Dropdown;