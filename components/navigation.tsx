"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 15px 60px;
  color: white;
  background-color: #121212;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const SpaceForTitle = styled.li`
  margin-right: 30%;
`;

const Item = styled.li`
  margin-right: 25%;
  color: smokewhite;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: smokewhite;
  }
`;

const Bar = styled(motion.div)`
  position: absolute;
  height: 3px;
  width: 30px;
  background-color: rgba(216, 31, 38, 0.8);
  border-radius: 12px;
  bottom: -7px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextLogo = styled.div`
  white-space: nowrap;
  font-size: 20px;
  color: white;
  width: 100%;
`;

export default function Navigation() {
  const [searchOpen, setSearchOpen] = useState(false);
  const path = usePathname();
  const inputAnimation = useAnimation();

  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };

  return (
    <Nav>
      <Col>
        <Items>
          <Item>
            <Link href="/">
              <LogoWrapper>
                <TextLogo>Next News</TextLogo>
              </LogoWrapper>
              {path === "/" && <Bar layoutId="bar" style={{ width: "96px" }} />}
            </Link>
          </Item>
          <SpaceForTitle />
          <Item>
            <Link href="/region">
              Region{" "}
              {path === "/region" && (
                <Bar layoutId="bar" style={{ width: "46px" }} />
              )}
            </Link>
          </Item>
          <Item>
            <Link href="/subject">
              Subject{" "}
              {path === "/subject" && (
                <Bar layoutId="bar" style={{ width: "48px" }} />
              )}
            </Link>
          </Item>
        </Items>
      </Col>
    </Nav>
  );
}
