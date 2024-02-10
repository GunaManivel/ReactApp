import React from "react";
import "./style/CompA.css";

const CompA = ({ arrObj }) => {
  return (
    <div>
      <section className="pricing py-5 bg-primary">
        <div className="container-fluid">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {arrObj.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <div class="col">
                      <div class="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                          <h5 class="card-title text-center text-muted">
                            {item.Membership}
                          </h5>
                          <h6 class="card-price  text-center">
                            {item.Price}
                            <span>/month</span>
                            <hr></hr>
                          </h6>
                          <p class="card-text">
                            <ul className="list-unstyled">
                              <li>
                                <span class="icon">
                                  <i class="bi bi-check-lg"></i>
                                </span>
                                &nbsp;
                                {item.User}
                              </li>
                              <li>
                                <span class="fa-li">
                                  <i class="bi bi-check-lg"></i>
                                </span>
                                &nbsp;
                                {item.Storage}
                              </li>
                              <li>
                                <span class="fa-li">
                                  <i class="bi bi-check-lg"></i>
                                </span>
                                &nbsp; Unlimited Public Projects
                              </li>
                              <li>
                                <span class="fa-li">
                                  <i class="bi bi-check-lg"></i>
                                </span>
                                &nbsp; Community Access
                              </li>
                              <li class={item.Private}>
                                <span class="fa-li">
                                  <i class={item.PrivateIcon}></i>
                                </span>
                                &nbsp; Unlimited Private Projects
                              </li>
                              <li class={item.Support}>
                                <span class="fa-li">
                                  <i class={item.SupportIcon}></i>
                                </span>
                                &nbsp; Dedicated Phone Support
                              </li>
                              <li class={item.Subdomain}>
                                <span class="fa-li">
                                  <i class={item.SubdomainIcon}></i>
                                </span>
                                &nbsp; Free Subdomain
                              </li>
                              <li class={item.Report}>
                                <span class="fa-li">
                                  <i class={item.ReportIcon}></i>
                                </span>
                                &nbsp; Monthly Status Reports
                              </li>
                            </ul>
                          </p>
                        </div>
                        <div class="card-footer">
                          <div class="d-grid gap-2">
                            <button
                              class="btn btn-primary border"
                              type="button"
                            >
                              Button
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompA;
