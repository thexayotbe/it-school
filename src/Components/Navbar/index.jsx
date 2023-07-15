import React from "react";
import { Wrapper } from "./style";
import { Span } from "../Generic/styles";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <Wrapper.Logo>
          <Span>{"< "}</Span> UITS <Span>{" />"}</Span>
        </Wrapper.Logo>
        <Wrapper.Links>
          <Wrapper.Link className="active" onClick={() => navigate("/")}>
            .home<Span>()</Span>
          </Wrapper.Link>
          <Wrapper.Link onClick={() => navigate("/team")}>
            .team<Span>()</Span>
          </Wrapper.Link>
          <Wrapper.Link>
            .portfolio<Span>()</Span>
          </Wrapper.Link>
          <Wrapper.Link>
            .services<Span>()</Span>
          </Wrapper.Link>
          <Wrapper.Link>
            .contact<Span>()</Span>
          </Wrapper.Link>
        </Wrapper.Links>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Navbar;
